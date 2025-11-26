---
title: Vault CMS Guide
description: How to use this Obsidian vault as a content management system.
tags:
  - Meta
pubDate: 2025-08-23
draft: true
---
![Vault CMS logo with Obsidian and Astro logo marks underneath.](images/vault-cms-cover.png)

## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default. Optimized for use with [Slate Astro theme](https://github.com/SlateDesign/slate-blog).

## Philosophy 

1. Plug-and-play Astro blogging experience.
2. Maintain vanilla Obsidian look and feel.
3. Emphasis on clarity and flexibility. 

## Default Settings

1. Markdown links are used in favor of wikilinks.
2. Default location for new notes is the `post` folder.
3. Some core plugins are disabled.
4. Indentation guides have been disabled.
5. Custom hotkeys have been set.
6. Community plugins have been enabled.
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
- Rename current post: `CTRL + R` 
- Start Terminal: `CTRL + SHIFT + D`
- Open Astro config file: `CTRL + SHIFT + ,`
- Git: Commit and Sync: `CTRL + SHIFT + S` (off by default)
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
- Bases CMS
- Commander
- Custom save
- Default New Tab Page
- Editing Toolbar
- Homepage
- Image Inserter
- Paste image rename
- Property Over Filename
- SEO
- Settings Search
- Status Bar Organizer
- Tag Wrangler
- Title-Only Tab

### Astro Composer 

Handy for easily creating new notes as Astro blog posts. Just create a new note with `CTRL + N`, type in a title in Title case or with special characters, and the note or folder name generated is a kebab-case version of the title without special characters. This is ideal for automating post slugs. `CTRL + R` allows you to easily rename blog posts, and note filenames (or parent folders) get updated in kebab-case automatically.

You can also define and set default properties that can be generated automatically or manually set for any open note as well.

Once you've used wikilinks or markdown links, you can also convert those automatically to internal links for Astro with the "Convert internal links for Astro" command. 

You can also easily grab links to headings by right clicking one and selecting "Copy Heading Link". These will be Astro-ready links by default, but you can use Obsidian wikilnks or markdown links, too.

Astro Composer also has several useful commands for development. To open terminal quickly, use the `Open terminal` command. It's been modified for Windows, macOS, and Linux to start terminal in the relevant directory so you can easily do standard package manager commands with `pnpm` or `npm`. It can be activated with `CTRL + SHIFT + D`. 

You can also launch the `Edit Astro config` command, which will open your `config.ts` file. You can also press `CTRL + SHIFT + ,` to edit it, or use the conveniently-placed icon next to the traditional Obsidian settings icon (which can be toggled off in this plugin's settings if you don't want it there). 

### Custom save

This defines a set of commands to fire once `CTRL + S` is initiated. For convenience, both "Convert internal links for Astro" and "Standardize properties" commands from the Astro Composer plugin are included. You can add or remove any if you'd like - this is designed for posts to be "publish-ready" when manually saved.

### Homepage, Default New Tab Page, and Bases CMS

All three of these plugins work together so you're default screen is a `.base` file that's a directory of all of your blog posts, listed in reverse-chronological order. You're able to configure the CMS view and even add new views to your liking. 

The Base is nested within a folder called `_bases` because Astro will ignore files and folders with an underscore prefix, letting you use this for Obsidian without processing it for the live site.

I call this "Home Base."

Bases CMS lets us treat a grid of content like a content management system. You can select multiple items and do bulk edits, rename content right from that view, or toggle the draft status of an item.

To edit a view, select the current view on the top left, revealing the list, and then select the right chevron arrow to open up the "configure view" options. Configure your desired properties here. At the very bottom, you can set where new notes are created when the "new" button is clicked on the top right. 

### Paste Image Rename 

Quickly drag and drop image files or paste directly from your clipboard and give them kebab-case, SEO-friendly names. 

### Image Inserter

Pull in images from Unsplash or other sources easily with just a few keystrokes. Just use `CTRL + '` to insert an image - and immediately set a SEO-friendly filename for it via the Paste Image Rename plugin.

### Tag Wrangler

Makes managing tabs more useful. Can easily bulk-rename tags or search your content by tags.

### Title-Only Tab

Pulls from the `title` property instead of using the filename for any tab.

### Property Over Filename

When linking or searching notes, you can use the `title` property as its primary identifier, which is more helpful semantically for linking between and searching for posts since note filenames are post slugs in kebab case instead of titles. 

When you link to another note, its `title` is automatically set as the hyperlinked text, but you can easily change it to something else after it's been inserted.

### Zen Mode

Zen Mode offers another quick option to focus on your writing. Pressing `CTRL + SHIFT + Z` will enter Zen mode: all elements removed except for your content. You can use `ESC` to exit. 

This plugin is a great alternative if you don't prefer to use Hider to remove the UI, and prefer to toggle it all on or off at once as needed. 

### Settings Search

Simply provides a global search option for all settings in Obsidian.

### SEO

Get a snappy audit of your content for search engine rankings and AI parsing. You can get a quick snapshot of your whole vault or drill down into specific posts. You can configure the settings to turn off checks you don't care about or tweak the logic in the calculations.

### Editing Toolbar

This adds a Microsoft Word-style toolbar to Obsidian. Click the "toggle editing toolbar" button on the title bar to show or hide it. It's hidden until revealed and completely disabled on mobile by default.

## Git, Commander, and Status Bar Organizer

The [Git](https://obsidian.md/plugins?id=obsidian-git) plugin is turned off by default, if you turn it on, you can easily publish to your Astro blog without leaving Obsidian. Simply enable the plugin and configure with git to turn it on. By default, you'll see your current git status and count of files changed (if any) in the status bar on the bottom right.

To publish, you can use `CTRL + SHIFT + S` or click the "commit-and-sync" button on the status bar (added with the Commander plugin). Your changes will be committed and pushed to your remote repository automatically.

Status Bar Organizer ensures the commit-and-sync icon stays on the far right. You can also use it to hide or re-arrange status bar items to your liking.

### BRAT (Temporary)

Only used temporarily to load any beta plugins before they're available in the Obsidian plugin directory. Future versions of this vault will remove BRAT in favor of the official releases.

## Mobile 

### Disabling the Git Plugin

If you choose to enable the Git plugin, it's recommended to disable it on mobile and use something like [Git Sync](https://github.com/ViscousPot/GitSync) for iOS and Android (or [MGit](https://github.com/maks/MGit) just for Android) instead. The Git plugin is notoriously buggy on mobile so it's better to use something else. 

Here's how to disable it: 

1. On your mobile device, open Obsidian, and open your Astro Modular site's `src/content` folder as a vault. 
2. Open the left sidebar and open Settings. 
3. Scroll down to community plugins and tap on Git from the list.
4. Scroll all the way down and select "Disable on this device".
5. Restart Obsidian. 

This method is recommended rather than merely disabling the plugin, since if you sync with your desktop it will also get disabled there, too. This way it's disabled per-device.

### Customization 

To tweak the mobile-specific experience, there are two main places to check: Toolbar and Appearance in settings.

#### Toolbar

Under the Toolbar settings, you can set the mobile quick action which is triggered by pulling down from the top of the screen by tapping the "Configure" option. 

Below that you can adjust what options are available to you on the mobile toolbar.

#### Appearance 

Under the Appearance settings, locate "Interface" and the "Ribbon menu configuration" option's "Manage" button. You can set your preferred quick access item from the list, and customize which items appear on the ribbon menu. 

If you keep scrolling down, you can find an optional mobile-specific CSS snippet: `swap-new-tab-icon-with-home-mobile.css`. This CSS snippet replaces the new tab button's icon on the mobile view with a home icon. Since opening a new tab using the combination of Default New Tab Page and Homepage plugins opens your "home base" view, the icon better represents what's happening when you tab the button. Disable to bring back the standard plus (`+`) icon. This is off by default, but you can turn it on if you'd like.

### You're All Set

Assuming you have git working on your phone in another capacity, you now have seamless content sync between your desktop, laptop, tablet, and mobile devices.