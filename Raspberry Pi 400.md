---
title: Raspberry Pi 400
feed : show
date : 20-03-2023
---
# Raspberry Pi 400

After a couple of attempts, I have been able to make my Raspberry Pi 400 the headless, always-on machine running Obsidian and backing up to github that I intended it to be, currently running the 64-bit Raspberry Pi OS and Obsidian via the ARM64 AppImage which automatically starts at boot.

Still to do: set up automatic backups to an additional drive.

Note: I am very much a novice with these things and stumbled my way though this in spite of most of it being over my head. It may seem like a lot, but with some patience and a willingness to reimage and start again, I think anyone can do it.

---
### How I set up my Raspberry Pi 400

#### 64-bit Raspberry Pi OS, booting from SSD
- For Obsidian to work, a 64-bit version of the OS is necessary. I imaged my USB SSD with the full 64-bit Raspberry Pi OS via the [Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/).
- The Raspberry Pi 400 automatically boots from the external drive when no SD card is present. I believe this is also true of the Raspberry Pi 4, and some earlier models can be configured to boot from USB as well. I chose to get an SSD both for reasons of speed and longevity since the kind of incremental and random read/write activity I'm doing with Obsidian has a high liklihood of chewing through SD cards.

#### Obsidian AppImage and Autostart
- After completing the basic setup on Raspberry Pi OS, download the ARM64 AppImage from the [Obsidian download page](https://obsidian.md/download).
- Make the AppImage executable, either from the interface by right clicking and adjusting the permissions or running `chmod +x my.AppImage` from the terminal. [^1] It worked best for me when I did this while the AppImage was still in the downloads folder.
- After verifying that it runs, I copied the AppImage to a permanent location - I chose the `opt` folder. You can also rename the AppImage, as I did for simplicity. I moved the AppImage in terminal with `sudo cp Obsidian.AppImage ~/opt` .  I don't think there would be any issue with running it from Downloads indefinitely but I preferred not to.
- To add Obsidian to the Menu, go to Menu>Preferences>Main Menu Editor. I selected the Office category and clicked New Item, then named it Obsidian and browsed for the AppImage (now in `~/opt`), and added an icon I'd downloaded from the internet. [^2] This is optional, though I find it handy to have Obsidian in the Main Menu and this is the first step in easiest way I could find to get the AppImage to autostart.
- To create a desktop file (needed for the next step), simply open the Main Menu and drag the Obsidian menu item out to the desktop. This creates a .desktop file, which you may wish to rename since for whatever reason it isn't automatically named Obsidian.desktop. [^3]
- In the terminal, make a folder called autostart in the ~/.config folder. I navigated to the config folder `cd ~/.config` and then made the folder `mkdir autostart`
- Then copy the .desktop file into the autostart folder. I navigated back to the Desktop folder (`cd ~/Desktop`)  and copied the Obsidian desktop file to the autostart folder with `cp Obsidian.desktop ~/.config/autostart`.  After doing this, Obsidian will now launch when the Raspberry Pi boots. [^4] (I usually have three windows open with different vaults, all three open on boot if they were open at shutdown.)

#### Headless
- In order to run the Raspberry Pi headlessly, some settings need to be adjusted. Go to Main Menu>Preferences>Raspberry Pi Configuration.
- Under Display, set the preferred headless resolution, this will tell the Raspberry Pi to boot up fully including the gui desktop without a monitor connected.
- Under Interfaces, turn on VNC and SSH in order to enable remote access to the machine. (This is probably not strictly necessary, but it's certainly helpful to check that things are working as intended and make adjustments as needed.) A reboot will be required.
- Once SSH is enabled, I have terminal access from my Mac [^5] and iPad app called Terminal & SSH.
- For remote access to the desktop, right click on the VNC icon, which is in the top right, near the bluetooth, wifi and volume icons.
	- Select options
	- Change Authentication to VNC password
	- Go to Users & Permissions and set a password
	- Use these credentials from VNC Viewer on another device, or on an iOS App like Screens. [^6]

---
[^1]: https://docs.appimage.org/introduction/quickstart.html
[^2]: https://raspberrytips.com/desktop-shortcuts-on-raspberry-pi/, under heading "Add it to the Main Menu"
[^3]: https://raspberrytips.com/desktop-shortcuts-on-raspberry-pi/
[^4]: https://elementaryos.stackexchange.com/questions/10949/run-appimage-on-startup
[^5]: https://medium.com/@thedyslexiccoder/how-to-remotely-access-a-raspberry-pi-on-a-mac-via-ssh-be285d418f54
[^6]: https://magpi.raspberrypi.com/articles/vnc-raspberry-pi