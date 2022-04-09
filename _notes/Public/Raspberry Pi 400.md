---
title: Raspberry Pi 400
notetype : feed
date : 07-03-2022
---
# Raspberry Pi 400

After a couple of attempts, I have been able to make it the headless, always-on machine running Obsidian and backing up to github. 

I first attempted to have this work using 64-bit Ubuntu Desktop, but never got it to work headlessly as intended.

I eventually abandoned Ubuntu and have been able to get it to work with the 64-bit Raspberry Pi OS, running Obsidian from the ARM64 AppImage available from the [Obsidian download page](https://obsidian.md/download).

---
For Obsidian to work, a 64-bit version of the OS is necessary.

[Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/), I imaged my SSD with 64-bit Ubuntu Desktop. The 400 automatically boots from the external drive when no SD card is present and it works without trouble. It was straightforward to install Obsidian via [FlatPak](https://flathub.org/apps/details/md.obsidian.Obsidian), and Obsidian is currently taking care of syncing with my other devices (using Obsidian Sync, which I find well worth paying for) and keeping the github repositories up to date (via the Obsidian Git plugin).

Some additional setup is needed both through github and locally before Obsidian Git can take over, but it wasn't too difficult even with my very limited knowledge. (More on this to come.)

I have SSH access from the iPad though an app called Terminal and SSH and remote GUI acces though an app callled Screens. Neither are of all that much use now, since it doesn't work headlessly and is usually within reach.

Things I still need to do:
- Get it working headlessly.
- Set up automatic backups to another local drive. (Waiting on this until the headless situation is more stable to keep the set up/take down simple since I can't currently leave it set up overnight.)