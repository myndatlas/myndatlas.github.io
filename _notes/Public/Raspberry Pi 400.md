---
title: Raspberry Pi 400
notetype : feed
date : 07-03-2022
---
# Raspberry Pi 400

The goal with this device is eventually to have it be always-on and only sometimes connected to a monitor, but that's proving to be a bit tricky to get set up. In the meantime it's easy to set up as needed and put away again when not in use. I'm also finding it handy to have set up with the monitor nearby even when mainly working on the iPad Pro, given the iPad's limitations when using a second monitor.

Using the [Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/), I imaged my SSD with 64-bit Ubuntu Desktop. The 400 automatically boots from the external drive when no SD card is present and it works without trouble. It was straightforward to install Obsidian via [FlatPak](https://flathub.org/apps/details/md.obsidian.Obsidian), and Obsidian is currently taking care of syncing with my other devices (using Obsidian Sync, which I find well worth paying for) and keeping the github repositories up to date (via the Obsidian Git plugin).

Some additional setup is needed both through github and locally before Obsidian Git can take over, but it wasn't too difficult even with my very limited knowledge. (More on this to come.)

I have SSH access from the iPad though an app called Terminal and SSH and remote GUI acces though an app callled Screens. Neither are of all that much use now, since it doesn't work headlessly and is usually within reach.

Things I still need to do:
- Get it working headlessly.
- Set up automatic backups to another local drive. (Waiting on this until the headless situation is more stable to keep the set up/take down simple since I can't currently leave it set up overnight.)