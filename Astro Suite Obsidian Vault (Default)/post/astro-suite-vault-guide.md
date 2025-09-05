---
title: Astro Suite Vault Guide
description: Explanation of the Astro Suite Obsidian vault.
tags:
  - Meta
pubDate: 2025-08-23
draft: true
---
![Astro and Obsidian logos stacked vertically with a "+" (plus) sign between them.](images/astro-composer-suite-for-obsidian-1.png)

## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default. Optimized for use with [Slate Astro theme](https://github.com/SlateDesign/slate-blog).

## Philosophy 

1. Plug-and-play Astro blogging experience.
2. Maintain vanilla Obsidian look and feel.
3. Emphasis on clarity and flexibility. 
## Important Hotkeys

Here's a guide for some important hotkeys set especially for this theme:
- Toggle left side panel: `CTRL + ALT + Z`
- Toggle right side panel: `CTRL + ALT + X`
- Navigate back: `ALT + ←`
- Navigate forward: `ALT + →`
- Open homepage: `CTRL + M` 
- Toggle reading view: `CTRL + E`
- Toggle Zen mode: `CTRL + SHIFT + Z`
- Insert image: `CTRL + '`
- Start Terminal: `CTRL + SHIFT + D`
- Git: Commit and Sync `CTRL + SHIFT + S` (off by default)

If you're on Mac, `CTRL` = `CMD`.
## Plugins 

Disabled default core plugins: 
- Backlinks
- Canvas
- Daily notes
- Graph view
- Note composer
- Outgoing links
- Page preview
- Templates
- Sync

Community plugins enabled: 
- Astro Composer
- Commander
- Custom save
- Default New Tab Page
- Homepage
- Image Inserter
- Paste image rename
- Shell commands
- Title-Only Tab

### Astro Composer 

Handy for easily creating new notes as Astro blog posts. Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note or folder name generated is a kebab-case version of the title without special characters. This is ideal for automating post slugs. 

You can also define and set default properties that can be generated automatically or manually set for any open note as well.

Once you've used Wikilinks or markdown links, you can also convert those automatically to internal links for Astro with the "Convert internal links for Astro" command. 

### Custom save

This defines a set of commands to fire once `CTRL + S` is initiated. For convenience, both "Convert internal links for Astro" and "Standardize properties" commands from the Astro Composer plugin are included. You can add or remove any if you'd like - this is designed for posts to be "publish-ready" when manually saved.

### Homepage and Default New Tab Page

Both of these work together so you're default screen is a `.base` file that's a directory of all of your blog posts, listed in reverse-chronological order. You're able to customize the note properties in the views to your liking. 

The Base is nested within a folder called `_bases` because Astro will ignore files and folders with an underscore prefix, letting you use this for Obsidian without processing it for the live site.

I call this "Home Base."

### Paste Image Rename 

Quickly drag and drop image files or paste directly from your clipboard and give them kebab-case, SEO-friendly names. 

### Image Inserter

Pull in images from Unsplash or other sources easily with just a few keystrokes. Just use `CTRL + '` to insert an image - and immediately set a SEO-friendly filename for it via the Paste Image Rename plugin.

### Title-Only Tab

Pulls from the `title` property instead of using the filename for any tab.

### Shell commands and Commander

Shell commands helps open terminal quickly with the `Start Terminal` command. It's been modified for Windows, macOS, and Linux to start terminal in the relevant directory so you can easily do standard package manager commands like `npm` or `pnpm`. It can be activated with `CTRL + SHIFT + D`. 

Commander helps us place a button for it on the file explorer UI.

### BRAT (Temporary)

Only used temporarily to load Astro Composer and Disable Tabs plugins before they're available in the Obsidian plugin directory. Future versions of this vault will remove BRAT in favor of the official releases.

## Git

The [Git](https://obsidian.md/plugins?id=obsidian-git) plugin is turned off by default, if you turn it on, you can easily publish to your Astro blog without leaving Obsidian using `CTRL + SHIFT + S`. Simply enable the plugin and configure with git to turn it on.