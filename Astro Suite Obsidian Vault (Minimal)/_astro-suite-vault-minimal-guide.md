---
title: Astro Suite Vault (Minimal) Guide
pubDate: 2025-08-25
---
![Astro and Obsidian logos stacked vertically with a "+" (plus) sign between them.](astro-composer-suite-for-obsidian.png)

## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default. Optimized for use with the [Chiri Astro theme](https://github.com/the3ash/astro-chiri).

## Philosophy 

1. Plug-and-play Astro blogging experience. 
2. Emphasis on focus. 
3. Reliance on keyboard shortcuts.

## Theme

Fittingly, the [Minimal](https://minimal.guide/home) theme is used.  It uses an understated color scheme with high contract options. 

The [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings), [Hider](https://github.com/kepano/obsidian-hider), and [Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings) community plugins are also installed by default, giving you complete control over your experience. 

## CSS Snippets

A custom CSS snippet called `custom-draggable-top-area.css` makes moving your window is easier when the window frame is hidden and there's no tab bar. The default enabled version is `custom-draggable-top-area-windows.css` which is active by default, and helps with some offsets UI including closing/minimizing/maximizing on Windows, and there's a `custom-draggable-top-area-windows.css` which offers similar functionality for Mac. Use the base version for no offsets, all can be configured in Settings > Appearance > CSS Snippets (make sure to disable the Windows version when another is turned on). None of these are active in mobile.

`hide-tabs-icon-mobile.css` removes the tabs icon in the mobile version of Obsidian. If you disable the Disable Tabs plugin, you may want to disable this snippet as well.

Both `hide-longpress-flair-mobile.css` and `hide-header-title-mobile.css` are also related to making the mobile interface more simple. Disable any of these snippets to bring the elements back.

## Important Hotkeys

Because Obsidian's interface has been stripped down to its bare essence, relying on hotkeys is imperative. Here's a guide:
- New note: `CTRL + N`
- Open settings: `CTRL + ,`
- Command palette: `CTRL + P`
- Search vault: `CTRL + O`
- Open a new tab: `CTRL + T`
- Close current tab: `CTRL + W`
- Toggle left side panel: `CTRL + ALT + Z`
- Toggle right side panel: `CTRL + ALT + X`
- Toggle tab bar: `CTRL + ALT + S`
- Navigate back: `ALT + ←`
- Navigate forward: `ALT + →`
- Open homepage: `CTRL + M` 
- Add a new property: `CTRL + ;`
- Toggle reading view: `CTRL + E`
- Toggle Zen mode: `CTRL + SHIFT + Z`
- Custom save: `CTRL + S
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
- Custom save
- Default New Tab Page
- Disable Tabs
- Hider
- Homepage
- Image Inserter
- Minimal Theme Settings
- mdx as md
- Paste image rename
- ProZen
- Shell commands
- Style Settings
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

### Minimal Theme Settings, Disable Tabs, Hider, and Style Settings

As mentioned earlier, these plugins keep you focused and distraction-free while allowing for customization of your experience. 

Should you need to reveal any of the main hidden panels, you can use `CTRL + ALT Z` for the left side panel, `CTRL + ALT + X` for the right side panel, or `CTRL + ALT + S` for the tab bar. Pressing it again will hide it. 

In Style Settings, the only options that have been modified are hiding the Properties heading and the "Add Property" button.

### Paste Image Rename 

Quickly drag and drop image files or paste directly from your clipboard and give them kebab-case, SEO-friendly names. 

### Image Inserter

Pull in images from Unsplash or other sources easily with just a few keystrokes. Just use `CTRL + '` to insert an image - and immediately set a SEO-friendly filename for it via the Paste Image Rename plugin.

### Disable Tabs

This effectively makes it so opening any new tab replaces the current one only. Especially nice for when you're hiding the tab bar and don't want multiple tabs. When combined with the Homepage and New Default Tab plugins, `CTRL + T` and `CTRL + M` essentially do the same thing.

### Title-Only Tab

Pulls from the `title` property instead of using the filename for any tab. With the tab bar hidden, you won't see this unless you unhide it.

### ProZen

Zen mode offers another quick option to focus on your writing. Pressing `CTRL + SHIFT + Z` will enter Zen mode: automatic full-screen, all elements removed except for your content. This is a great alternative if you don't prefer to use Hider to remove the UI, and prefer to toggle it all on or off at once as needed. Alternatively, you can use the Focus Mode included in the Minimal theme.

### mdx as md

This is just for any Astro theme that uses `.mdx` in addition to `.md`, such as Chiri. Unfortunately there's not yet a way to have Bases read properties from `.mdx` files so while the files themselves will appear, the file's properties won't appear on the homepage `.base` view. 

### Shell commands and Commander

Shell commands helps open terminal quickly with the `Start Terminal` command. It's been modified for Windows, macOS, and Linux to start terminal in the relevant directory so you can easily do standard package manager commands like `npm` or `pnpm`. It can be activated with `CTRL + SHIFT + D`. 

Commander helps us place a button for it on the file explorer UI, which is hidden by default in this theme anyway. Toggle "Hide file explorer buttons" in the Hider plugin to reveal.

### BRAT (Temporary)

Only used temporarily to load Astro Composer and Disable Tabs plugins before they're available in the Obsidian plugin directory. Future versions of this vault will remove BRAT in favor of the official releases.

## Git

The [Git](https://obsidian.md/plugins?id=obsidian-git) plugin is turned off by default, if you turn it on, you can easily publish to your Astro blog without leaving Obsidian using `CTRL + SHIFT + S`. Simply enable the plugin and configure with git to turn it on.