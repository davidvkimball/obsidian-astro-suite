---
title: "Vault CMS Guide (Minimal)"
pubDate: 2025-08-25
---
![Vault CMS logo with Obsidian and Astro logo marks underneath.](_assets/vault-cms-cover.png)

## Overview

All plugins, key bindings, and the theme can be customized to your liking, but this is what's on by default. Optimized for use with the [Chiri Astro theme](https://github.com/the3ash/astro-chiri).

## Philosophy 

1. Plug-and-play Astro blogging experience. 
2. Emphasis on focus. 
3. Reliance on keyboard shortcuts.

## Default Settings

1. Markdown links are used in favor of wikilinks.
2. Default location for new notes is the vault folder.
3. Some core plugins are disabled.
4. Indentation guides have been disabled.
5. Custom hotkeys have been set.
6. Community plugins have been enabled.

## Theme

Fittingly, the [Minimal](https://minimal.guide/home) theme is used. It uses an understated color scheme with high contract options. 

The [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings), [Hider](https://github.com/kepano/obsidian-hider), and [Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings) community plugins are also installed by default, giving you complete control over your experience. 

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
- Rename current post: `CTRL + R` 
- Custom save: `CTRL + S
- Insert image: `CTRL + '`
- Start Terminal: `CTRL + SHIFT + D`
- Open Astro config file: `CTRL + SHIFT + ,`
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
- Bases CMS
- Commander
- Custom save
- Default New Tab Page
- Disable Tabs
- Hider
- Homepage
- Image Inserter
- Minimal Theme Settings
- mdx as md
- Paste image rename
- Property Over Filename
- SEO
- Settings Search
- Status Bar Organizer
- Style Settings
- Title-Only Tab
- Zen Mode

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

### Property Over Filename

When linking or searching notes, you can use the `title` property as its primary identifier, which is more helpful semantically for linking between and searching for posts since note filenames are post slugs in kebab case instead of titles. 

When you link to another note, its `title` is automatically set as the hyperlinked text, but you can easily change it to something else after it's been inserted.

### Zen Mode

Zen Mode offers another quick option to focus on your writing. Pressing `CTRL + SHIFT + Z` will enter Zen mode: all elements removed except for your content. You can use `ESC` to exit. 

This plugin is a great alternative if you don't prefer to use Hider to remove the UI, and prefer to toggle it all on or off at once as needed. Alternatively, you can use the Focus Mode included in the Minimal theme.

### mdx as md

This is so you can see and edit the contents of any `.mdx` in addition to `.md`. Unfortunately there's not yet a way to have Bases read properties from `.mdx` files so while the files themselves will appear, the file's properties won't appear on the homepage `.base` view. 

### Settings Search

Simply provides a global search option for all settings in Obsidian.

### SEO

Get a snappy audit of your content for search engine rankings and AI parsing. You can get a quick snapshot of your whole vault or drill down into specific posts. You can configure the settings to turn off checks you don't care about or tweak the logic in the calculations.

## Git and Commander

The [Git](https://obsidian.md/plugins?id=obsidian-git) plugin is turned off by default, if you turn it on, you can easily publish to your Astro blog without leaving Obsidian. Simply enable the plugin and configure with git to turn it on. If you unhide the status bar, you'll also see your current git status in the status bar on the bottom right.

To publish, you can use `CTRL + SHIFT + S` or click the "commit-and-sync" button on the status bar (added with the Commander plugin). Your changes will be committed and pushed to your remote repository automatically.

### BRAT (Temporary)

Only used temporarily to load any beta plugins before they're available in the Obsidian plugin directory. Future versions of this vault will remove BRAT in favor of the official releases.

## CSS Snippets

A custom CSS snippet called `custom-draggable-top-area.css` makes moving your window is easier when the window frame is hidden and there's no tab bar. The default enabled version is `custom-draggable-top-area-windows.css` which is active by default, and helps with some offsets UI including closing/minimizing/maximizing on Windows, and there's a `custom-draggable-top-area-windows.css` which offers similar functionality for Mac. Use the base version for no offsets, all can be configured in Settings > Appearance > CSS Snippets (make sure to disable the Windows version when another is turned on). None of these are active in mobile.

Mobile-specific CSS snippets are covered below.

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

If you keep scrolling down, you can find some optional mobile-specific CSS snippets.

`hide-tabs-icon-mobile.css` removes the tabs icon in the mobile version of Obsidian. If you disable the Disable Tabs plugin, you may want to disable this snippet as well.

The `swap-new-tab-icon-with-home-mobile.css` snippet does as its file name suggests. Since opening a new tab using the combination of Default New Tab Page and Homepage plugins opens your "home base" view, the icon better represents what's happening when you tab the button. Disable to bring back the standard plus (`+`) icon.

`hide-longpress-flair-mobile.css`, `hide-header-title-mobile.css`, and `hide-sync-icon-mobile.css` are also related to making the mobile interface more simple. Disable any of these snippets to bring the elements back.

### You're All Set

Assuming you have git working on your phone in another capacity, you now have seamless content sync between your desktop, laptop, tablet, and mobile devices.