---
title: A Quick Guide on GBA Flashcarts
description: GBA flashcarts, what there is, and what to buy
tabs:
  - ez-flash-ode: EZ Flash Omega DE
    ez-flash-omega: EZ Flash Omega
    everdrive-gba-mini: Everdrive GBA Mini
    supercard-sd: SuperCard SD
---

Here are the best GBA flashcarts available on the market currently. For other consoles, please see the [quick start guide list](index.html).

The below flashcarts are purchasable from AliExpress or reputable retro accessory stores like [Hand Held Legend](https://handheldlegend.com) and [Retro Game Repair Shop](https://retrogamerepairshop.com).

## Recommended carts
{% capture tab-ez-flash-ode %}
### EZ Flash Omega Definitive Edition
![EZ Flash ODE](./assets/images/gba_carts/EZFlash_Omega_DE.png){:.float-start .me-3} Premium option with the [best battery life as of revision B](https://www.reddit.com/r/Gameboy/comments/12n4krf/gba_flash_cart_power_consumption_test_ez_flash/). It has some niche features like rumble and Slot-2 DS compatibility for linking. Fixes save issue from regular version. Has a bigger pcb so it doesn't come with the alternative DS Lite shell that the [EZ Flash Omega](?tab=ez-flash-omega) includes. [Mahko made a more indepth post here](https://www.reddit.com/r/Gameboy/comments/kv9y87/after_playing_with_the_new_ezflash_omega/).

The EZ Flash Omega DE uses a CR1025 battery for it's real-time clock (RTC). The battery itself is not save-critical as the cart uses FRAM instead of SRAM for storing save data. The battery is held in with a battery contact clip, therefore no soldering is required to replace the battery. There isn't any warning to say that the battery is running dry. The only sign that your battery needs replacing is that the RTC resets itself to the default time on each boot.

#### Purchase Links
This cart costs around $80 USD. Purchase links have been provided here though they may not be the cheapest listings out there:
- AliExpress: <https://www.aliexpress.com/item/1005006734360403.html>
- Retro Game Repair Shop: <https://retrogamerepairshop.com/products/ez-flash-omega-definitive-edition>
{% endcapture %}
{% assign tab-ez-flash-ode = tab-ez-flash-ode | split: "////////" %}

{% capture tab-ez-flash-omega %}
### EZ Flash Omega
![EZ Flash Omega](./assets/images/gba_carts/EZFlash_Omega_front.png){:.float-start .me-3} The non-premium option with a few shortcomings. It has a notable battery drain in comparison to other flashcarts. After saving, you *must* wait 5-10 seconds before powering off your console as you will risk corrupting the file system otherwise. There is an [activity LED mod](https://www.youtube.com/watch?v=SsPOobvoBe8) available for this cart to help determine when you should turn off your console, however, it does require you to have some soldering skills. Despite these issues, it is a fairly capable flashcart. It also comes with an alternate shell to sit flush in the DS Lite. This would be the best cart for people on a budget, it isn't as limited in what it can do compared to the SuperCard SD and it doesn't cost as much as the premium options. 

The EZ Flash Omega uses a CR1220 battery held in with tabs which are soldered to the PCB. As a result, it may be difficult to find and install replacement batteries. If you aren't comfortable soldering a new battery to the cart, it is possible to break the welds of the tabs from the old battery, which will allow you to tape in a new battery. Just be careful to not break the tabs away from the solder joints on the PCB. The cart only uses the battery for the real-time clock (RTC), it is not save-critical. There isn't any warning to say that the battery is running dry. The only sign that your battery needs replacing is that the RTC resets itself to the default time on each boot.

#### Purchase Links
This cart costs about $40-50 USD. Purchase links have been provided here though they may not be the cheapest listings out there:
- AliExpress: <https://www.aliexpress.com/item/1005008480093651.html>
- HandHeldLegend: <https://handheldlegend.com/products/ez-flash-omega-micro-sd-card-adapter>
- Retro Game Repair Shop: <https://retrogamerepairshop.com/products/ez-flash-omega>
{% endcapture %}
{% assign tab-ez-flash-omega = tab-ez-flash-omega | split: "////////" %}

{% capture tab-everdrive-gba-mini %}
### Everdrive GBA Mini
![Everdrive GBA Mini](./assets/images/gba_carts/Everdrive_GBA_Mini.png){:.float-start .me-3} Premium option from Krikzz. It fits snug like a regular cartridge. However, the [EZ Flash Omega DE](?tab=ez-flash-ode) costs less and has more features in comparison. What it lacks in features, it gains in support and build quality. This may be a good option if you prefer better support over more functionality.

The Everdrive GBA Mini uses SRAM instead of FRAM for storing save data, which means that the battery inside of it is save-critical. The cart should warn you when the battery is running dry. It uses a CR1220 battery which is held in with a battery contact clip - therefore no soldering is required to replace the battery.

Currently, this is the only GBA flashcart being sold by Krikzz. The previous Everdrive GBA X5 is no longer in stock.

#### Purchase Links
This cart costs $99 USD. You can find it on Krikzz website here: <https://krikzz.com/our-products/cartridges/everdrive-gba-mini.html>
{% endcapture %}
{% assign tab-everdrive-gba-mini = tab-everdrive-gba-mini | split: "////////" %}

{% capture tab-supercard-sd %}
### SuperCard SD
![SuperCard MiniSD](./assets/images/gba_carts/SuperCard_MiniSD_Front.png){:.float-start .me-3} The cheapest and worst option. While it offers the least amount of features, it has become an adequate option for those that need a GBA flashcart on a budget thanks to the hard work of custom firmware developers like David G.F. and MetroidManiac. The stock SuperCard firmware requires games to be manually patched with external software, and manual game saving via a menu. With CFW such as SuperFW or SCFW, games are automatically patched on-device, and game saving is taken care of automatically.

Note that to install a custom firmware on the SuperCard SD, you will need to either use a 2GB SD card first to launch the installer from the stock firmware, or a Slot-1 flashcart and a DSL/NDS system on hand.

The SuperCard SD is also a great option for those that need a cart to use in conjunction with TWiLight Menu++ on DSL/NDS systems to load GBA games natively from Slot-1. 

An archive of the stock firmware and ROM patcher for this cart can be found here: <https://archive.org/details/supercard-slot-2-series>

The SuperCard SD does not work reliably on AGB-001 consoles. The reliability issues worsen if the console has a hardmod installed, such as an IPS display and/or a LiPo battery.
{:.alert .alert-warning}

#### Alternative Custom Firmware

  As mentioned above, there have been efforts to improve this flashcart for normal use. There is a variety of custom firmwares that you can use on the SuperCard SD, each with their own features, pros, and cons. While they are all quite different to one another, they all support SDHC SD cards, which is a major improvement over the stock firmware.

#### SuperFW
[SuperFW](https://superfw.davidgf.net/) has both a DS mode and a GBA mode. SuperFW can auto-save your games without having to reset to the main menu. It also automatically patches game ROMs while loading them, making SuperCard's ROM patcher unnecessary. Unlike other CFWs mentioned below, it also has RTC patches for games that require a working RTC, and exFAT support. Do note, however, that it's preferable to stick to FAT32, as it's less likely to have issues in DS mode, and doesn't corrupt as easily. SuperFW also has an in-game menu, which has options for updating the RTC clock in games, soft-resetting the game, resetting to firmware, manual saving, and save states management.

##### SCFW
[SCFW](https://gbatemp.net/threads/647238/) was the first of the three to be developed, and as of now, it only has a GBA mode. It automatically patches game ROMs, making SuperCard's ROM patcher unnecessary. SCFW can also auto-save your games without having to reset to the menu. The modular kernel branch also features support for various GBA homebrew apps and emulators - you can find more details in this [GBATemp thread.](https://gbatemp.net/threads/656629/)

#### SCSFW
[SCSFW](https://gbatemp.net/threads/663797/) mainly focuses on a DS mode for FlashMe/PassMe users. It does not have a GBA kernel, however, you can use it with SCFW or SuperFW if you need that functionality. It's fairly limited in what it can do. It uses a custom build of nds-hb-menu which will let you run homebrew from the SD card. Since it is built into the firmware, you do not need any extra files on the SD card for it to work. SCSFW features automatic DLDI patching and boot hotkeys (press A+B on boot to configure them). The main use case for SCSFW is to autoboot into TWiLight Menu++.

#### Flashing firmware
There are several ways to flash one of these firmwares to the SuperCard SD. Which one you use will depend on your setup and preferences:
 - [SCFW](https://gbatemp.net/threads/647238/) and [SuperFW](https://gbatemp.net/threads/654847/) both have tools built in to flash SuperCard firmwares. All you need to do is follow the flashing instructions in their threads. If you are currently on the stock firmware of the cart, you will be limited to 2GB microSD cards during this process. However, once the new firmware has been flashed and is working properly, you can switch to an SDHC/SDXC card.
  - If you have a DS flashcart that can run YSMenu, launching either SCFW or SuperFW from there with the SuperCard SD inserted should allow you to flash the firmware from there, bypassing the 2GB SD limit.
- [SCKILL](https://github.com/ApacheThunder/SCKILL) and [superfw-nds-flasher-tool](https://github.com/davidgfnet/superfw-nds-flasher-tool/releases) can be used from a DS flashcart to flash a new firmware as well as dumping your current one.

The SuperCard SDs being sold nowadays may use a flash chip with the id `c2ba`. These cannot be reflashed with the original updater/recovery tool from SuperCard. However, the flashing tools mentioned above all support writing to these carts without issue.

The SuperCard SD uses SRAM to store save data, so the battery is save-critical (depending on the firmware used). Most firmware options available for the SuperCard SD, including the stock firmware, have some sort of function to write your save file to the SD card without having to reboot your GBA. This means that, even if your battery is dead, you will still be able to keep your save data. The battery used in the SuperCard SD seems to vary in size depending on when you order one. They are held in with tabs soldered to the PCB, meaning that replacements are harder to find and install, especially if you haven't soldered before. For replacement batteries, a CR1620 will fit just fine within the shell. A CR2025 is the biggest battery that can fit without any modification to the shell; however, it is a very tight fit and does cause the shell to warp slightly. 

#### Purchase Links
This cart costs anywhere between $10-20 USD. A purchase link has been provided but it may not be the cheapest listing out there:
- AliExpress: <https://www.aliexpress.com/item/1005006954219864.html>

The SuperCard SD is also being sold under the "REMANK" name. The "REMANK SuperCard" is the base SuperCard SD without any firmware modifications. The "REMANK FlashGBACart" is a SuperCard SD pre-flashed with SuperFW. If you were to buy the FlashGBACart variant, we cannot guarantee that it will have the latest SuperFW; it is advised that you check for updates before using the cart.
{% endcapture %}
{% assign tab-supercard-sd = tab-supercard-sd | split: "////////" %}

{% assign tabs = tab-ez-flash-ode | concat: tab-ez-flash-omega | concat: tab-everdrive-gba-mini | concat: tab-supercard-sd %}
{% include tabs.html index=0 tabs=tabs %}

{% include_relative include/disclaimer.md %}
