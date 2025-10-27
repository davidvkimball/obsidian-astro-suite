# Astro Suite for Obsidian

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

<img width="1920" height="1080" alt="astro-suite-preview" src="https://github.com/user-attachments/assets/0ee3837b-9ebe-4bd9-92e4-2c7e84efd57c" />

## Installation Guide

1. Clone or install your Astro theme of choice.
2. Clone or download a zip of this repo.
3. Open the folder of the version you want (Default, Minimal, or Docs)
4. Copy the contents of that folder into the proper directory depending on your theme (see below)
5. Open Obsidian and select the "Open folder as vault" option, and select the folder with the `.obsidian` folder in it.

### Default

Optimized for [Slate blog](https://github.com/SlateDesign/slate-blog), but the most general-purpose option. Copy folder contents in the `src/content` folder.

####  Minimal 

Optimized for [Chiri](https://github.com/the3ash/astro-chiri), a far more opinionated vault prioritizing visual minimalism. Copy folder contents in the `src/content/posts` folder.

### Docs 

Optimized for [Starlight](https://github.com/withastro/starlight), Astro's starter documentation theme. Copy folder contents in the `src/content` folder.

### Included Community Plugins
- [Astro Composer](https://github.com/davidvkimball/obsidian-astro-composer)
- [Commander](https://github.com/phibr0/obsidian-commander)
- [Custom save](https://github.com/HananoshikaYomaru/obsidian-custom-save)
- [Default New Tab Page](https://github.com/chrisgrieser/new-tab-default-page)
- [Homepage](https://github.com/mirnovov/obsidian-homepage)
- [Image Inserter](https://github.com/cloudy9101/obsidian-image-inserter)
- [Paste image rename](https://github.com/reorx/obsidian-paste-image-rename)
- [Property over filename](https://github.com/davidvkimball/obsidian-property-over-filename)
- [Shell commands](https://github.com/Taitava/obsidian-shellcommands)
- [Title-Only Tab](https://github.com/tristone13th/obsidian-title-only-tab)

#### Minimal adds: 

- [Minimal](https://github.com/kepano/obsidian-minimal) theme
- [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings)
- [Hider](https://github.com/kepano/obsidian-hider)
- [ProZen](https://github.com/cmoskvitin/obsidian-prozen)
- [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)
- [Disable tabs](https://github.com/davidvkimball/obsidian-disable-tabs)
- [MDX as Markdown](https://github.com/mkozhukharenko/mdx-as-md-obsidian)
- Custom CSS Snippets

### Optional Community Plugins (disabled by default)

- [Git](https://github.com/denolehov/obsidian-git)

### Recommended .gitignore

Add the following to your Astro project's `.gitignore` file:
```
# Obsidian workspace files
**/.obsidian/workspace.json
**/.obsidian/workspace-mobile.json
```
This prevents conflicts between multiple devices.
