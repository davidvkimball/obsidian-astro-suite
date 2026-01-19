#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const AdmZip = require('adm-zip');
const inquirer = require('inquirer');

const pkg = require('../package.json');

const program = new Command();

program
  .name('create-vault-cms')
  .description('Official installer for Vault CMS')
  .version(pkg.version);

program
  .argument('[target]', 'target directory')
  .option('-t, --template <name>', 'template to use (from vault-cms-presets)')
  .action(async (target, options) => {
    // 1. Logic fix: If npm sends "starlight" as the first argument because of missing -- 
    // we should treat it as a mistake and ask for the path anyway.
    let targetPath = target;
    let template = options.template;

    // Detect if the user accidentally passed a template name as the target path
    const commonTemplates = ['starlight', 'slate', 'chiri'];
    if (targetPath && commonTemplates.includes(targetPath.toLowerCase()) && !template) {
        template = targetPath.toLowerCase();
        targetPath = null;
    }

    // 2. Prompt for path if not clearly provided
    if (!targetPath) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'path',
          message: 'Where should we install Vault CMS?',
          default: 'src/content',
        }
      ]);
      targetPath = answers.path;
    }

    const targetDir = path.resolve(targetPath);
    const tempZip = path.join(targetDir, 'vault-cms-temp.zip');
    const extractDir = path.join(targetDir, '.vault-cms-temp-extract');
    
    const repoName = template ? 'vault-cms-presets' : 'vault-cms';
    const zipUrl = `https://github.com/davidvkimball/${repoName}/archive/refs/heads/master.zip`;

    console.log(`🚀 Installing Vault CMS${template ? ` (template: ${template})` : ''}...`);

    try {
      await fs.ensureDir(targetDir);

      console.log('  📦 Downloading archive...');
      await downloadFile(zipUrl, tempZip);

      console.log('  📂 Extracting files...');
      const zip = new AdmZip(tempZip);
      zip.extractAllTo(extractDir, true);

      const folders = await fs.readdir(extractDir);
      const innerFolder = path.join(extractDir, folders[0]);
      const sourcePath = template ? path.join(innerFolder, template) : innerFolder;

      if (!(await fs.pathExists(sourcePath))) {
        throw new Error(`Template "${template}" not found in presets repository.`);
      }

      const toKeep = ['_bases', '.obsidian', 'README.md'];
      for (const item of toKeep) {
        const src = path.join(sourcePath, item);
        const dest = path.join(targetDir, item);
        
        if (await fs.pathExists(src)) {
          await fs.copy(src, dest, { overwrite: true });
          console.log(`  ✓ Added ${item}`);
        }
      }

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

      await fs.remove(tempZip);
      await fs.remove(extractDir);

      console.log('\n✨ Vault CMS is ready!');
      process.exit(0);
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
    }).on('error', (err) => {
      reject(err);
    });
  });
}

program.parse();
