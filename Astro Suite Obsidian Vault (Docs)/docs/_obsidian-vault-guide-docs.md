---
title: "Obsidian Vault Guide (Docs)"
description: A guide for this Obsidian Vault.
---
![Astro and Obsidian logos stacked vertically with a "+" (plus) sign between them.](docs/attachments/astro-composer-suite-for-obsidian.png)

## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default. Optimized for use with [Starlight Astro theme](https://github.com/withastro/starlight).

## Philosophy 

1. Plug-and-play Astro documentation experience.
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
- Rename current doc: `CTRL + R` 
- Start Terminal: `CTRL + SHIFT + D`
- Open Astro config file: `CTRL + SHIFT + ,`
- Git: Commit and Sync `CTRL + SHIFT + S` (off by default)
- Reload Obsidian (without saving): `CTRL + SHIFT + R`
- Toggle light/dark mode: `CTRL + SHIFT + M`

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
- Bases CRM
- Commander
- Custom save
- Default New Tab Page
- Homepage
- Image Inserter
- Paste image rename
- Property Over Filename
- Settings Search
- Shell commands
- Title-Only Tab
- Zen Mode

### Astro Composer 

Handy for easily creating new notes as Astro docs. Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note name generated is a kebab-case version of the title without special characters. This is ideal for automating doc page slugs. `CTRL + R` allows you to easily rename docs, and note filenames get updated in kebab-case automatically.

You can also define and set default properties that can be generated automatically or manually set for any open note as well.

Once you've used wikilinks or markdown links, you can also convert those automatically to internal links for Astro with the "Convert internal links for Astro" command. 

You can also easily grab links to headings by right clicking one and selecting "Copy Heading Link". These will be Astro-ready links by default, but you can use Obsidian wikilnks or markdown links, too.

### Custom save

This defines a set of commands to fire once `CTRL + S` is initiated. For convenience, both "Convert internal links for Astro" and "Standardize properties" commands from the Astro Composer plugin are included. You can add or remove any if you'd like - this is designed for posts to be "publish-ready" when manually saved.

### Homepage, Default New Tab Page, and Bases CRM

All three of these plugins work together so you're default screen is a `.base` file that's a directory of all of your blog posts, listed in reverse-chronological order. You're able to configure the CMS view and even add new views to your liking. 

The Base is nested within a folder called `_bases` because Astro will ignore files and folders with an underscore prefix, letting you use this for Obsidian without processing it for the live site.

I call this "Home Base."

Bases CRM lets us treat a grid of content like a content management system. You can select multiple items and do bulk edits, rename content right from that view, or toggle the draft status of an item.

### Paste Image Rename 

Quickly drag and drop image files or paste directly from your clipboard and give them kebab-case, SEO-friendly names. 

### Image Inserter

Pull in images from Unsplash or other sources easily with just a few keystrokes. Just use `CTRL + '` to insert an image - and immediately set a SEO-friendly filename for it via the Paste Image Rename plugin.

### Title-Only Tab

Pulls from the `title` property instead of using the filename for any tab.

### Property Over Filename

When linking or searching notes, you can use the `title` property as its primary identifier, which is more helpful semantically for linking between and searching for posts since note filenames are post slugs in kebab case instead of titles. 

When you link to another note, its `title` is automatically set as the hyperlinked text, but you can easily change it to something else after it's been inserted.

### Zen Mode

Zen Mode offers another quick option to focus on your writing. Pressing `CTRL + SHIFT + Z` will enter Zen mode: all elements removed except for your content. You can use `ESC` to exit. 

This plugin is a great alternative if you don't prefer to use Hider to remove the UI, and prefer to toggle it all on or off at once as needed. Alternatively, you can use the Focus Mode included in the Minimal theme.

### Shell commands and Commander

Shell commands helps us open two things quickly: terminal and Astro's `config.ts` file. 

To open terminal quickly, use the `Start Terminal` command. It's been modified for Windows, macOS, and Linux to start terminal in the relevant directory so you can easily do standard package manager commands like `npm` or `pnpm`. It can be activated with `CTRL + SHIFT + D`. 

To open your `astro.config.mjs` file quickly, simply use the `Astro Configuration` command. You can also press `CTRL + SHIFT + ,` to open it with your default application. 

Commander helps us place a button for each of these actions on the file explorer UI.

**Linux user warning:** on Linux, there isn't a universal method to open the default terminal. Additionally, the widely used Flatpak (via Flathub) employs non-trivial sandboxing, which introduces further challenges. 

### Settings Search

Simply provides a global search option for all settings in Obsidian.

### BRAT (Temporary)

Only used temporarily to load Astro Composer, Disable Tabs, SEO, and Property Over Filename plugins before they're available in the Obsidian plugin directory. Future versions of this vault will remove BRAT in favor of the official releases.

## Git

The [Git](https://obsidian.md/plugins?id=obsidian-git) plugin is turned off by default, if you turn it on, you can easily publish to your Astro blog without leaving Obsidian using `CTRL + SHIFT + S`. Simply enable the plugin and configure with git to turn it on.

## CSS Snippets

An optional custom CSS snippet is included called `swap-new-tab-icon-with-home-mobile.css` which replaces the new tab button's icon on the mobile view with a home icon. Since opening a new tab using the combination of Default New Tab Page and Homepage plugins opens your "home base" view, the icon better represents what's happening when you tab the button. Disable to bring back the standard plus (`+`) icon. This is off by default, but you can turn it on if you'd like.