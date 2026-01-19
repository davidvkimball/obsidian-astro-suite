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
    try {
      console.log('🚀 Initializing Vault CMS Installer...');

      const availableTemplates = await fetchTemplates();
      
      let template = options.template;
      let targetPath = target;

      if (targetPath && availableTemplates.includes(targetPath.toLowerCase()) && !template) {
        template = targetPath.toLowerCase();
        targetPath = null;
      }

      if (!template) {
        const { useTemplate } = await inquirer.prompt([{
          type: 'confirm',
          name: 'useTemplate',
          message: 'Would you like to use a preset template (e.g. Starlight, Slate)?',
          default: false
        }]);

        if (useTemplate) {
          const { selectedTemplate } = await inquirer.prompt([{
            type: 'list',
            name: 'selectedTemplate',
            message: 'Select a template:',
            choices: availableTemplates
          }]);
          template = selectedTemplate;
        }
      }

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

      console.log(`\n🚀 Installing Vault CMS${template ? ` (template: ${template})` : ''}...`);

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

      // Smart .gitignore logic: Look for project root
      const projectRoot = await findProjectRoot(targetDir);
      const gitignorePath = path.join(projectRoot, '.gitignore');
      const ignores = '\n# Vault CMS / Obsidian\n.obsidian/workspace.json\n.obsidian/workspace-mobile.json\n.ref/\n';
      
      if (await fs.pathExists(gitignorePath)) {
        const content = await fs.readFile(gitignorePath, 'utf8');
        if (!content.includes('.obsidian/workspace.json')) {
          await fs.appendFile(gitignorePath, ignores);
          console.log(`  ✓ Updated .gitignore at ${path.relative(process.cwd(), gitignorePath)}`);
        }
      } else {
        await fs.writeFile(gitignorePath, ignores.trim() + '\n');
        console.log(`  ✓ Created .gitignore at ${path.relative(process.cwd(), gitignorePath)}`);
      }

      await fs.remove(tempZip);
      await fs.remove(extractDir);

      console.log('\n✨ Vault CMS is ready!');
      process.exit(0);
    } catch (err) {
      console.error('\n❌ Installation failed:', err.message);
      process.exit(1);
    }
  });

async function findProjectRoot(startDir) {
    let current = startDir;
    while (current !== path.parse(current).root) {
        const hasPkg = await fs.pathExists(path.join(current, 'package.json'));
        const hasAstro = await fs.pathExists(path.join(current, 'astro.config.mjs')) || await fs.pathExists(path.join(current, 'astro.config.ts'));
        if (hasPkg || hasAstro) return current;
        current = path.dirname(current);
    }
    return startDir; // Fallback to target dir
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'vault-cms-installer' } }, (res) => {
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

function fetchTemplates() {
  return new Promise((resolve) => {
    const url = 'https://api.github.com/repos/davidvkimball/vault-cms-presets/contents';
    https.get(url, { headers: { 'User-Agent': 'vault-cms-installer' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const contents = JSON.parse(data);
          const dirs = contents
            .filter(item => item.type === 'dir' && !item.name.startsWith('.'))
            .map(item => item.name);
          resolve(dirs);
        } catch (e) {
          resolve(['starlight', 'slate', 'chiri']); 
        }
      });
    }).on('error', () => resolve(['starlight', 'slate', 'chiri']));
  });
}

program.parse();
