#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const AdmZip = require('adm-zip');

// Read version from package.json
const pkg = require('../package.json');

const program = new Command();

program
  .name('create-vault-cms')
  .description('Official installer for Vault CMS')
  .version(pkg.version);

program
  .argument('[target]', 'target directory', '.')
  .option('-t, --template <name>', 'template to use (from vault-cms-presets)')
  .action(async (target, options) => {
    const targetDir = path.resolve(target);
    const tempZip = path.join(targetDir, 'vault-cms-temp.zip');
    const extractDir = path.join(targetDir, '.vault-cms-temp-extract');
    
    const repoName = options.template ? 'vault-cms-presets' : 'vault-cms';
    const zipUrl = `https://github.com/davidvkimball/${repoName}/archive/refs/heads/master.zip`;

    console.log(`🚀 Installing Vault CMS${options.template ? ` (template: ${options.template})` : ''}...`);

    try {
      // 1. Create target directory
      await fs.ensureDir(targetDir);

      // 2. Download ZIP
      console.log('  📦 Downloading archive...');
      await downloadFile(zipUrl, tempZip);

      // 3. Extract ZIP
      console.log('  📂 Extracting files...');
      const zip = new AdmZip(tempZip);
      zip.extractAllTo(extractDir, true);

      // 4. Identify the inner folder (GitHub zips wrap content in a folder named repo-branch)
      const folders = await fs.readdir(extractDir);
      const innerFolder = path.join(extractDir, folders[0]);
      const sourcePath = options.template ? path.join(innerFolder, options.template) : innerFolder;

      if (!(await fs.pathExists(sourcePath))) {
        throw new Error(`Template "${options.template}" not found in presets repository.`);
      }

      // 5. Move selected files
      const toKeep = ['_bases', '.obsidian', 'README.md'];
      for (const item of toKeep) {
        const src = path.join(sourcePath, item);
        const dest = path.join(targetDir, item);
        
        if (await fs.pathExists(src)) {
          await fs.copy(src, dest, { overwrite: true });
          console.log(`  ✓ Added ${item}`);
        }
      }

      // 6. Handle .gitignore
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

      // 7. Cleanup
      await fs.remove(tempZip);
      await fs.remove(extractDir);

      console.log('\n✨ Vault CMS is ready!');
    } catch (err) {
      console.error('\n❌ Installation failed:', err.message);
      if (await fs.pathExists(tempZip)) await fs.remove(tempZip);
      if (await fs.pathExists(extractDir)) await fs.remove(extractDir);
      process.exit(1);
    }
  });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

program.parse();
