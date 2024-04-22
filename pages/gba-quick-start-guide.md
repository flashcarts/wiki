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
![EZ Flash ODE](./assets/images/gba_carts/EZFlash_Omega_DE.png){:.float-start .me-3} Premium option with better battery life and some niche features like rumble and Slot-2 DS compatibility for linking. Fixes save issue from regular version. Has a bigger pcb so it doesnt come with the alternative DS Lite shell. [Mahko made a more indepth post here](https://www.reddit.com/r/Gameboy/comments/kv9y87/after_playing_with_the_new_ezflash_omega/).
<br><br><br>

#### Purchase Links
This cart costs around $80 USD. Purchase links have been provided here though they may not be the cheapest listings out there:
- AliExpress: <https://www.aliexpress.com/item/1005005696944889.html>
- Retro Game Repair Shop: <https://retrogamerepairshop.com/products/ez-flash-omega-definitive-edition>
{% endcapture %}
{% assign tab-ez-flash-ode = tab-ez-flash-ode | split: "////////" %}

{% capture tab-ez-flash-omega %}
### EZ Flash Omega
![EZ Flash Omega](./assets/images/gba_carts/EZFlash_Omega_front.png){:.float-start .me-3} The non-premium option with a few shortcomings. It has a notable battery drain in comparison to other flashcarts. After saving, you *must* wait 5-10 seconds before powering off your console as you will risk corrupting the file system otherwise. There is an [activity LED mod](https://www.youtube.com/watch?v=SsPOobvoBe8) available for this cart to help determine when you should turn off your console, however, it does require you to have some soldering skills. Despite these issues, it is a fairly capable flashcart. It also comes with an alternate shell to sit flush in the DS Lite. This would be the best cart for people on a budget, it isn't as limited in what it can do compared to the SuperCard SD and it doesn't cost as much as the premium options. 

#### Purchase Links
This cart costs about $40-50 USD. Purchase links have been provided here though they may not be the cheapest listings out there:
- AliExpress: <https://www.aliexpress.com/item/1005005691248592.html>
- HandHeldLegend: <https://handheldlegend.com/products/ez-flash-omega-micro-sd-card-adapter>
- Retro Game Repair Shop: <https://retrogamerepairshop.com/products/ez-flash-omega>
{% endcapture %}
{% assign tab-ez-flash-omega = tab-ez-flash-omega | split: "////////" %}

{% capture tab-everdrive-gba-mini %}
### Everdrive GBA Mini
![Everdrive GBA Mini](./assets/images/gba_carts/Everdrive_GBA_Mini.png){:.float-start .me-3} Premium option with the best battery life. It fits snug like a regular cartridge. However, the [EZ Flash Omega DE](?tab=ez-flash-ode) costs less and has more features in comparison. We would only recommend this flashcart if you want the best battery life possible. 

Currently, this is the only GBA flashcart being sold by Krikzz. The previous Everdrive GBA X5 is no longer in stock.

#### Purchase Links
This cart costs $99 USD. You can find it on Krikzz website here: <https://krikzz.com/our-products/cartridges/everdrive-gba-mini.html>
{% endcapture %}
{% assign tab-everdrive-gba-mini = tab-everdrive-gba-mini | split: "////////" %}

{% capture tab-supercard-sd %}
### SuperCard SD
![SuperCard MiniSD](./assets/images/gba_carts/SuperCard_MiniSD_Front.png){:.float-start .me-3} The cheapest and worst option. Out of the box, this cart only supports microSD cards up to 2GB in size. ROMs require a lot of patching to be able to use them on this cart, even then some games will refuse to work. Saving on this cart is *manual* as you need to quick reset to the menu to save. However, it seems to be the only readily available cart to work in conjunction with TWiLight Menu++ on DS Phat/Lite for loading GBA games natively on those systems via Slot-1. You can find an archive of the firmware and ROM patcher for this cart here: <https://archive.org/details/supercard-slot-2-series>

Recently, there have been efforts to make this flashcart suck less for normal use, such as [metroid-maniac's SCFW](https://github.com/metroid-maniac/SCFW). Unlike the stock firmware of the SuperCard SD, SCFW can auto-patch your ROMs for use with the cart, meaning that you won't have to use SuperCard's ROM patcher. SCFW can also autosave your games without having to reset to the menu. It also adds support for SDHC cards, as long as you flash the SCFW firmware. The only downsides to SCFW right now is that it requires you to use a 2GB microSD to flash the firmware, unless you have a DS flashcart capable of running YSMenu. It also currently doesn't support DS games unlike the stock firmware. Besides that, it is a huge improvement over the stock firmware of the cart.

The SuperCard SDs being sold nowadays may use a flash chip with the id `c2ba`. They cannot be reflashed with the original updator/recovery tool from SuperCard, however, SCFW does support flashing these carts.

#### Purchase Links
This cart costs anywhere between $10-20 USD. A purchase link has been provided but it may not be the cheapest listing out there:
- AliExpress: <https://www.aliexpress.com/item/1005006472045290.html>
{% endcapture %}
{% assign tab-supercard-sd = tab-supercard-sd | split: "////////" %}

{% assign tabs = tab-ez-flash-ode | concat: tab-ez-flash-omega | concat: tab-everdrive-gba-mini | concat: tab-supercard-sd %}
{% include tabs.html index=0 tabs=tabs %}

{% include_relative include/disclaimer.md %}
