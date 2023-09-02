---
title: Timebomb Misconceptions
---

This page aims to detail how timebombs work, which carts included timebombs in their stock kernel, and how to avoid the timebomb. Many people seem to have the wrong idea about timebombs, while they are somewhat of an issue, they aren't as destructive as some people claim.

## How do timebombs work?

The timebomb is built into the stock kernel of some carts. After a specific date set in the kernel has passed, the timebomb will trigger, preventing you from entering the flashcart's menu. It is not built into the firmware or hardware of the carts, meaning that you can use a *supported* kernel without a timebomb instead.

The timebomb error looks like this:

![Image of the timebomb message: "Wrong date or firmware expired!"](/assets/images/ds_carts/timebomb_message.png)

<sup>This error may look slightly different on other timebomb carts, though the message is mostly the same on all of them.</sup>

But that's all the timebomb does; it prevents you from booting into the flashcart's menu by showing you an error message instead. It does not:

- Delete files on the flashcart's micro SD card,
- Delete files on your console's SD card,
- Prevent your flashcart from being seen by the console,
- Brick your flashcart,
- Brick your console.

## Which carts have timebombs?

Here is a list of carts which had timebombs in their stock kernels:

- All r4i-sdhc.com carts
- **2014+** carts from r4isdhc.com - previous carts did not have a timebomb.
- All r4i-gold.eu carts
- r4i-gold.com's v1.4/1.4.4 carts - if the cart has a year number or 3DS written on the label, it is not a timebomb cart.
- All r4imax.com carts

If the label on your cart does not list one of these sites, it's very likely that it does not have a timebomb.

## How do I avoid the timebomb?

If you have one of the carts affected by this timebomb, you can do the following:

- Set your date and time back a few years - this will allow you to boot into the stock kernel without facing the timebomb message.
- Install [RetroGameFan's R4i-SDHC YSMenu](https://gbatemp.net/download/35737/) - timebomb carts are [supported by YSMenu](ysmenu-compat-ext#r4i-sdhc-ysmenu-folder). Before attempting to install it, ensure that your cart is supported by YSMenu. Unsupported carts can be bricked if you are not careful!
- Install TWiLight Menu ++ - install YSMenu first as your flashcart loader, then follow the guide for [installing TWiLight Menu ++ onto your flashcart](https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard).
- Install the stock kernel without the timebomb - thanks to [Kynex7510](https://github.com/kynex7510), we now have a version of the stock kernel with the timebomb removed. You can download it [from here](https://flashcard-archive.ds-homebrew.com/r4i-sdhc.com/old/r4i-sdhc.com_DEMON_1.85b-notimebomb.zip). This kernel does have [some issues though](ysmenu-compat-ext#alternative-kernel---r4i-sdhc-185b---rts-supportttmenu-style-uino-timebomb) so keep that in mind.

{% include_relative include/disclaimer.md %}