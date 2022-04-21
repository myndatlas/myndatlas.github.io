---
title: Setting up a MyndAtlas
notetype : feed
date : 10-04-2022
---
# Setting up the MyndAtlas

Although the note files are all simply text files written markdown (and thus not locked in to any program or editor), the way I work with them is currently dependent on [Obsidian](https://obsidian.md/) and number of the availble plug-ins.

## Installing and Configuring Obsidian
### Download Obsidian
- For iOS devices, Obsidian is available on the App Store.
- For MacOS I downloaded it from [Obsidian's website](https://obsidian.md/).
- On my [[Raspberry Pi 400]], I'm running Obsidian through the ARM64 AppImage (available from [Obsidian's Download page](https://obsidian.md/download))

### Obsidian Settings
#### Editor
- I prefer new panes to be in `Reading view` and the default editing mode to be `Source mode`.  (This is purely personal preference. [Live Preview Mode](https://help.obsidian.md/Live+preview+update) was not available when I first started using Obsidian and after being forced to have the hard line between editing and reading modes, I've found I prefer it. When in editing mode I *want* to see everything that gets hidden with Live Preview and I don't want to have to move the cursor/mouse in order to make the markdown/codeblocks visible. I like being able to see all the code in the codeblocks on a given page at once. Either way it's worth experimenting, but I definitely think it's worth spending some time with Source Mode and getting used to what the markdown looks like "raw" - I'm glad I did.)
- I use `Readable line length`, though I have gone back and forth. I wish there were more options and an ability to easily set the line length since I at times I think having it on is too narrow and having it off is too wide, at least when using a 15" wide-screen monitor.
- I have `Fold heading` and `Fold indent` turned on currently. I'm currently experimenting with storing exerpted quotes in lengthy source notes - being able to fold headings and intents makes this more managable.
- I use `Line wrap`
- I have `Auto pair brackets`, `Auto pair Markdown syntax`, `Smart intent lists`, `Use tabs` , and `Auto convert HTML` on.
#### Files & Links
- I have `Confirm file deletion` on (in my opinion it's easier to have this on and click confirm than fetch files back if they are deleted in error) and `Deleted files` are moved to the system trash because I like that redundancy.
- `Automatically update internal links` is on - this is a huge benefit to using an app like Obsidian.
- New notes are created by default in the `Vault folder` - I do end up moving them a lot of the time with my current system, but I'm more comfortable moving them manually than having them created anywhere else for the time being.
- `Use [[Wikilinks]]` is on
#### Appearance
- I change from `Light` to `Dark` base themes depending on light conditions, usually using the command palette.
- I currently prefer the `Minimal` theme.
#### Core Plugins
