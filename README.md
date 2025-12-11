# Vault CMS

Use [Obsidian](https://obsidian.md) as a content management system for your [Astro](https://astro.build) website.

<img width="1200" height="630" alt="Vault CMS cover with Obsidian and Astro logos at the bottom." src="https://github.com/user-attachments/assets/fb5d8368-71dd-4bf8-8851-36ada6d4f530" />


## Video Guide

📺 [Video Guide](https://youtu.be/dSm8aLPdVz0)

## Features 

- Easy integration into Astro website projects
- Preconfigured plugins, hotkeys and settings optimized for Astro workflows
- CMS-like homepage using Obsidian Bases
- Default, Minimal, and Docs options optimized for different Astro themes
- Optional instant-publish option via the Git plugin

<img width="1920" height="1080" alt="Vault CMS Showcase." src="https://github.com/user-attachments/assets/0d1ea89e-9d6b-40b1-944d-cfe6143e222e" />

> [!NOTE]
> To see Obsidian CMS combined with an Astro site specifically designed with it in mind, check out my theme [Astro Modular](https://github.com/davidvkimball/astro-modular).

## Installation Guide

1. Clone or install your Astro theme of choice.
2. Clone or download a zip of this repo.
3. Open the folder of the version you want (Default, Minimal, or Docs)
4. Copy the contents of that folder into the proper directory depending on your theme (see below)
5. Open Obsidian and select the "Open folder as vault" option, and select the folder with the `.obsidian` folder in it.

## Vaults

Each vault has preconfigured settings and plugins that match its intended use case / Astro theme.

### Default

Optimized for [Slate blog](https://github.com/SlateDesign/slate-blog), but the most general-purpose option. Copy folder contents in the `src/content` folder.

####  Minimal 

Optimized for [Chiri](https://github.com/the3ash/astro-chiri), a far more opinionated vault prioritizing visual minimalism. Copy folder contents in the `src/content/posts` folder.

### Docs 

Optimized for [Starlight](https://github.com/withastro/starlight), Astro's starter documentation theme. Copy folder contents in the `src/content` folder.

### Recommended .gitignore

Add the following to your Astro project's `.gitignore` file:
```
# Obsidian workspace files
**/.obsidian/workspace.json
**/.obsidian/workspace-mobile.json
```
This prevents conflicts between multiple devices.
