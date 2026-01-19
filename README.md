# Vault CMS

Use [Obsidian](https://obsidian.md) as a content management system for your [Astro](https://astro.build) website.

![Vault CMS cover with Obsidian and Astro logos at the bottom.](https://github.com/user-attachments/assets/fb5d8368-71dd-4bf8-8851-36ada6d4f530)


## Video Guide

📺 [Video Guide](https://youtu.be/dSm8aLPdVz0)

## Features 

- Easy integration into Astro website projects
- **Auto-detection** of your Astro theme and content structure
- Preconfigured plugins, hotkeys and settings optimized for Astro workflows
- CMS-like homepage using Obsidian Bases
- Works with any Astro theme by automatically detecting content types and frontmatter properties
- Optional instant-publish option via the Git plugin

![Vault CMS Showcase.](https://github.com/user-attachments/assets/0d1ea89e-9d6b-40b1-944d-cfe6143e222e)

> [!NOTE]
> Preconfigured vaults for [Slate](https://github.com/SlateDesign/slate-blog), [Chiri](https://github.com/the3ash/astro-chiri), and [Starlight](https://github.com/withastro/starlight) have moved to the [Presets](https://github.com/davidvkimball/vault-cms-presets) repo. To see Vault CMS combined with an Astro site specifically designed with it in mind, check out my theme [Astro Modular](https://github.com/davidvkimball/astro-modular).

## Installation Guide

The easiest way to install Vault CMS is via the CLI:

```bash
# Using pnpm
pnpm create vault-cms

# Using npm
npm create vault-cms

# Using yarn
yarn create vault-cms
```

This will automatically:
1. Copy the necessary `_bases` and `.obsidian` configuration folders.
2. Setup a `README.md` for your vault.
3. Update your `.gitignore` with the recommended Obsidian excludes.

### Manual Installation

If you prefer to install manually:
1. Clone or download a zip of this repo.
2. Copy the `_bases` and `.obsidian` folders into your Astro project (e.g., in `src/content`).
3. Open Obsidian and select "Open folder as vault", then select the folder containing the `.obsidian` directory.

## How Auto-Detection Works

Vault CMS automatically detects and configures itself based on your Astro project:

- **Project Detection**: Automatically finds your Astro project by locating `astro.config.mjs`, `astro.config.ts`, or other Astro config files.
- **Content Type Detection**: Scans your content folders (like `posts`, `pages`, `docs`, etc.) and automatically identifies them as content types.
- **Frontmatter Analysis**: Analyzes existing content files to detect frontmatter properties (title, date, description, etc.) and configures the plugin accordingly.
- **Theme Adaptation**: Adapts to your Astro theme's specific quirks and requirements automatically.

When you first open the vault, a setup wizard will guide you through the configuration process. The wizard uses the auto-detected information to pre-populate settings, making setup quick and easy. You can always run the wizard again later by using the "Open Setup Wizard" command.

### Recommended .gitignore

If you are not using the CLI, add the following to your Astro project's `.gitignore` file:
```
# Obsidian
.obsidian/workspace.json
.obsidian/workspace-mobile.json
```
This prevents conflicts between multiple devices and keeps your vault clean.
