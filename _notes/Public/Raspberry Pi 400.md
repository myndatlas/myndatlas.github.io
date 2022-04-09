---
title: Raspberry Pi 400
notetype : feed
date : 07-03-2022
---
# Raspberry Pi 400

After a couple of attempts, I have been able to make my Raspberry Pi 400 the headless, always-on machine running Obsidian and backing up to github that I intended it to be, currently running the 64-bit Raspberry Pi OS and Obsidian via the ARM64 AppImage available from the [Obsidian download page](https://obsidian.md/download).

---
### How I set up my Raspberry Pi 400
- For Obsidian to work, a 64-bit version of the OS is necessary. I imaged my USB SSD with the full 64-bit Raspberry Pi OS via the [Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/).
- The Raspberry Pi 400 (and the 4 also, I believe) automatically boots from the external drive when no SD card is present. As I understand it, early models can be configured to boot from USB as well. I chose to get an SSD both for reasons of speed and because as I understand it, the kind of incremental and random read/write activity I'm doing with Obsidian has a high liklihood of chewing through SD cards.
- Download the ARM64 AppImage from the [Obsidian download page](https://obsidian.md/download).
- 


(using Obsidian Sync, which I find well worth paying for) and keeping the github repositories up to date (via the Obsidian Git plugin).

Some additional setup is needed both through github and locally before Obsidian Git can take over, but it wasn't too difficult even with my very limited knowledge. (More on this to come.)

I have SSH access from the iPad though an app called Terminal and SSH and remote GUI acces though an app callled Screens. Neither are of all that much use now, since it doesn't work headlessly and is usually within reach.