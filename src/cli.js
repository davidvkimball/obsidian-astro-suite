#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const program = new Command();

program
  .name('create-vault-cms')
  .description('Official installer for Vault CMS')
  .version('1.0.0');

program
  .argument('[target]', 'target directory', '.')
  .option('-t, --template <name>', 'template to use (from vault-cms-presets)')
  .action(async (target, options) => {
    const targetDir = path.resolve(target);
    const tempDir = path.join(targetDir, '.vault-cms-temp');
    
    const repoUrl = options.template 
      ? 'https://github.com/davidvkimball/vault-cms-presets.git'
      : 'https://github.com/davidvkimball/vault-cms.git';

    console.log(`🚀 Installing Vault CMS${options.template ? ` (template: ${options.template})` : ''}...`);

    try {
      // 1. Download
      console.log('  📦 Downloading files...');
      execSync(`git clone --depth 1 ${repoUrl} "${tempDir}"`, { stdio: 'ignore' });

      // 2. Determine source path
      const sourcePath = options.template ? path.join(tempDir, options.template) : tempDir;
      
      if (!(await fs.pathExists(sourcePath))) {
        throw new Error(`Template "${options.template}" not found in presets repository.`);
      }

      // 3. Define what to keep
      const toKeep = ['_bases', '.obsidian', 'README.md'];
      
      // 4. Move selected files
      await fs.ensureDir(targetDir);
      for (const item of toKeep) {
        const src = path.join(sourcePath, item);
        const dest = path.join(targetDir, item);
        
        if (await fs.pathExists(src)) {
          await fs.copy(src, dest);
          console.log(`  ✓ Added ${item}`);
        }
      }

      // 5. Update .gitignore
      const gitignorePath = path.join(targetDir, '.gitignore');
      const ignores = '\n# Vault CMS / Obsidian\n.obsidian/workspace.json\n.obsidian/workspace-mobile.json\n.ref/\n';
      
      if (await fs.pathExists(gitignorePath)) {
        const content = await fs.readFile(gitignorePath, 'utf8');
        if (!content.includes('.obsidian/workspace.json')) {
          await fs.appendFile(gitignorePath, ignores);
          console.log('  ✓ Updated .gitignore');
        }
      } else {
        await fs.writeFile(gitignorePath, ignores.trim() + '\n');
        console.log('  ✓ Created .gitignore');
      }

      // 6. Cleanup
      await fs.remove(tempDir);

      console.log('\n✨ Vault CMS is ready!');
    } catch (err) {
      console.error('\n❌ Installation failed:', err.message);
      if (await fs.pathExists(tempDir)) await fs.remove(tempDir);
      process.exit(1);
    }
  });

program.parse();
