# Obsidian CMS (formerly Obsidian Astro Suite)

A set of preconfigured Obsidian vaults to publish Astro blog posts easily.

<img width="1200" height="630" alt="astro-composer-suite-for-obsidian" src="https://github.com/user-attachments/assets/c006e78e-01c7-401d-a2cf-f6f4a653723c" />

## Video Guide

📺 [Astro Suite for Obsidian Video Guide](https://youtu.be/ZhizarvwLnU)

## Features 

- Easy integration into Astro website projects
- Preconfigured plugins, hotkeys and settings optimized for Astro workflows
- CMS-like homepage using Obsidian Bases
- Default, Minimal, and Docs options optimized for different Astro themes
- Optional instant-publish option via the Git plugin

<img width="1920" height="1080" alt="astro-suite-preview" src="https://github.com/user-attachments/assets/7bf58b29-f393-4fdf-8e0d-ae1254fab045" />


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
