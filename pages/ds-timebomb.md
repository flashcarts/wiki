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

- All r4i-sdhc.com carts on stock kernels older than v1.87b
- **2014+** carts from r4isdhc.com on stock kernels older than v4.3 - previous carts did not have a timebomb.
- All r4i-gold.eu carts
- r4i-gold.com's v1.4/1.4.4 carts - if the cart has a year number or 3DS written on the label, it is not a timebomb cart.
- All r4imax.com carts

If the label on your cart does not list one of these sites, it's very likely that it does not have a timebomb.

## How do I avoid the timebomb?

If you have one of the carts affected by this timebomb, you can do the following:

- Install [RetroGameFan's R4i-SDHC YSMenu](https://gbatemp.net/download/35737/) - timebomb carts are [supported by YSMenu](ysmenu-compat-ext#r4i-sdhc-ysmenu-folder). Before attempting to install it, ensure that your particular cart is known to work with YSMenu by referencing the compatibility list. Unsupported carts can be bricked if you are not careful!
- Install TWiLight Menu ++ - install YSMenu first as your flashcart loader, then follow the guide for [installing TWiLight Menu ++ onto your flashcart](https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard).
- [r4isdhc.com 2014+ and r4i-sdhc.com only] - Install the latest version of the stock kernel, which no longer has a timebomb. This is kernel version 4.3b for r4isdhc.com carts, and 1.87b for r4i-sdhc.com carts. The kernel can be downloaded from [r4i-sdhc.com](http://r4i-sdhc.com).
- Set your date and time back a few years - this will allow you to boot into the stock kernel without facing the timebomb message. This can however cause issues with some games that keep track of the time to prevent cheating, such as the Pokemon Games.

## Why do they have a timebomb?

There have been many theories as to why these flashcarts had a timebomb. Some of which are listed below:
- It was there to trick the user into thinking their R4 was broken and that they would need a new one. The message doesn't go away unless you know that you would need to update the kernel or change the date and time, so it is a possibility.
- It was just a reminder to update the kernel to ensure that people had the latest version installed. This is most likely the actual reason, as this is reflected in the error message itself.
- It would catch out manufacturers making unauthorised clones of these carts. The timebomb would mean that it is harder to modify and redistribute the stock kernel of the flashcart they have cloned.

{% include_relative include/disclaimer.md %}
