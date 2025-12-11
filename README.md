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
> To see Obsidian CMS combined with an Astro site specifically designed with it in mind, check out my theme [Astro Modular](https://github.com/davidvkimball/astro-modular).

## Installation Guide

1. Clone or install your Astro theme of choice.
2. Clone or download a zip of this repo.
3. Copy the contents of the `Vault` folder into your Astro project. **Recommended location:** `src/content` folder, but it can be placed at the level of `src/content` or higher (like the project root).
4. Open Obsidian and select the "Open folder as vault" option, and select the folder containing the `.obsidian` directory.
5. The Vault CMS plugin will automatically detect your Astro project structure and guide you through setup via a wizard.

## How Auto-Detection Works

Vault CMS automatically detects and configures itself based on your Astro project:

- **Project Detection**: Automatically finds your Astro project by locating `astro.config.mjs`, `astro.config.ts`, or other Astro config files
- **Content Type Detection**: Scans your content folders (like `posts`, `pages`, `docs`, etc.) and automatically identifies them as content types
- **Frontmatter Analysis**: Analyzes existing content files to detect frontmatter properties (title, date, description, etc.) and configures the plugin accordingly
- **Theme Adaptation**: Adapts to your Astro theme's specific quirks and requirements automatically

When you first open the vault, a setup wizard will guide you through the configuration process. The wizard uses the auto-detected information to pre-populate settings, making setup quick and easy. You can always run the wizard again later by using the "Open Setup Wizard" command.

### Recommended .gitignore

Add the following to your Astro project's `.gitignore` file:
```
# Obsidian workspace files
**/.obsidian/workspace.json
**/.obsidian/workspace-mobile.json
```
This prevents conflicts between multiple devices.
