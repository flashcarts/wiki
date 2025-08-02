---
title: NTRBoot Quick Start Guide
tabs:
   - preflashed: Pre-flashed carts
     flashable: Flashable carts
     avoid: Carts to avoid
---

{% assign ds-qsg-reference = site.pages | where: 'name', 'ds-quick-start-guide.md' %}

This page exists as an answer to "Which flashcart should I buy for ntrboot?". Flashcarts which we recommend over others in a category are in **bold**. <br/>
We would recommend buying an **[Ace3DS X](?tab=preflashed#ace3ds-x)** due to it's ability to switch between it's DS firmware and 3DS ntrboot firmware. Other options are mentioned on this list if you are unable to obtain this cart or have a need for DSi ntrboot instead.
{:.alert .alert-info}

## READ FIRST

1. Carts flashed with ntrboot will not appear on your console's home screen. This is normal, **your flashcart isn't broken**. The only exception to this is the Acekard 2i (unless it has been flashed with DSi ntrboot).
1. Some carts may look similar to those listed on this page, however, they may not be compatible with ntrboot. See the '[Carts to avoid](?tab=avoid)' tab for more information.
1. Do **not** use 'R4' websites to purchase flashcarts as they are often scammy and don't give refunds, Stick to more general places like eBay and AliExpress.
   - Amazon, Etsy & Temu are usually not recommended due to selling flashcarts for much higher prices than eBay or AliExpress 
   - The exception to the R4 site rule is NDS-Card, hence why we have links to their site for most flashcarts.
1. If you already have a flashcart and want to see if it can be flashed with ntrboot, have a look at this page: [https://3ds.hacks.guide/ntrboot](https://3ds.hacks.guide/ntrboot). <br/>As mentioned above, some flashcarts look similar to those that are ntrboot-compatible. Make sure to verify that the flashcart you are attempting to flash is indeed compatible.

## Flashcarts

{% capture tab-preflashed %}
These carts come pre-flashed with the ntrboot firmware. If you have one of these carts, you can jump straight into installing boot9strap: [https://3ds.hacks.guide/installing-boot9strap-(ntrboot)](https://3ds.hacks.guide/installing-boot9strap-(ntrboot))
{:.alert .alert-info}

## **Ace3DS X**
![Ace3DS X](/assets/images/ds_carts/ace3dsx.png){:.float-start .me-3} 

This flashcart requires a microSD card to be inserted for it to be detected by your console, neither the DS mode nor the ntrboot mode will work without it. The DS mode is the normal Ace3DS+ experience, you add the kernel files and then your games! However, **do not flash this mode with ntrboot**. Instead, flip the switch on the side of the cart to 3DS mode. 3DS mode is ntrboot firmware, when the cart is in 3DS mode, it will disappear from your home screen - this is normal and it means that you are now in ntrboot mode.

The Ace3DS X only supports 3DS ntrboot, it is not compatible with DSi ntrboot.

### Purchase links and kernel downloads
The Ace3DS X costs around $5-10 USD. Searching "ace3ds" on AliExpress or eBay usually returns this cart. Links to purchase the Ace3DS X are provided below, but they may not be the cheapest option as they're one of many listings:

{% for item in ds-qsg-reference[0].purchase_links[0].links %}
- [{{item[0]}}]({{item[1]}})
{%endfor%}

You can find more information about this flashcart on our [DS Quick Start Guide](ds-quick-start-guide?tab=unhacked-detailed#ace3ds-x).

{% endcapture %}
{% assign tab-preflashed = tab-preflashed | split: "////////" %}

{% capture tab-flashable %}
These carts will need to be flashed with ntrboot as they come with their DS firmware from factory. Flashing one of these carts is easy though, you can find out how to do that here: [3DS ntrboot](https://3ds.hacks.guide/ntrboot) / [DSi ntrboot](https://wiki.ds-homebrew.com/ds-index/ntrboot)
{:.alert .alert-info}

## **R4iSDHC.com 2014+**
![r4isdhc gold pro](/assets/images/ds_carts/r4isdhc_com_front.png){:.float-start .me-3} 

It doesn't matter whether you get the Gold Pro, or the Dual Core, or any other cart from r4isdhc.com, as long as the year number is 2014 or above - you can use the cart with ntrboot. Carts pre-2014 are not compatible with ntrboot. You must ensure that this is an r4isdhc**.com** cart, other similar looking carts mentioned in the '[Carts to avoid](?tab=avoid)' tab cannot use ntrboot. 

R4iSDHC.com 2014+ flashcarts support both 3DS and DSi ntrboot.

### Purchase links and kernel downloads
These usually cost around $5-10 USD. Searching for "r4 gold pro" on AliExpress or eBay usually returns this cart. Links to purchase this cart are provided below, but they may not be the cheapest option as they're one of many listings:

{% assign r4isdhc = ds-qsg-reference[0].purchase_links[2].links %}
{% for item in r4isdhc %}
<!--Remove r4i-sdhc.com from r4isdhc.com list. Trying to remove it with filters didn't seem to work.-->
{% if item[0] != "NDS-Card (r4i-sdhc.com)" %}
- [{{item[0]}}]({{item[1]}})
{%endif%}
{%endfor%}

You can find more information about this flashcart on our [DS Quick Start Guide](ds-quick-start-guide?tab=unhacked-detailed#dstti-demon-clones).

## R4i-SDHC 3DS RTS
![R4i-SDHC 3DS](/assets/images/ds_carts/r4i-sdhc_3ds_rts.png){:.float-start .me-3}   

This cart is from r4i-sdhc.com, it is very similar to the r4isdhc.com cart mentioned above, though the main difference is that it normally costs more to buy it. You should compare prices to find the cheapest of the two to get the best deal.

The R4i-SDHC 3DS RTS supports both 3DS and DSi ntrboot.

### Purchase links and kernel downloads
The R4i-SDHC 3DS RTS usually costs around $10-15 USD. Searching for "r4 rts 3ds" on AliExpress or eBay usually returns this cart. Links to purchase this cart are provided below, but they may not be the cheapest option as they're one of many listings:

{% assign r4i-sdhc = ds-qsg-reference[0].purchase_links[2].links[-1] %}
- [{{r4i-sdhc[0]}}]({{r4i-sdhc[1]}})

You can find more information about this flashcart on our [DS Quick Start Guide](ds-quick-start-guide?tab=unhacked-detailed#dstti-demon-clones).

## DSTT
![DSTT](/assets/images/ds_carts/dstt.png){:.float-start .me-3}   

**This cart will not work on a stock DSi/3DS, only buy this cart if you have a DS/DS Lite**. [Only certain flashchips are compatible](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6), while the purchase links here have sent out compatible DSTT carts, we cannot guarantee that this is what you will recieve. 

Consider other options on this list before deciding if you really want to buy a DSTT.

The DSTT supports both 3DS and DSi ntrboot.

### Purchase links and kernel downloads
These can still be purchased new from NDS-Card on their website. Links are provided below, but you may find it cheaper to buy a DSTT from a second-hand marketplace like eBay:

- NDS-Card: <https://www.nds-card.com/ProShow.asp?ProID=157>

You can find more information about this flashcart on our [DS Quick Start Guide](ds-quick-start-guide?tab=original-hacked#dstt).

{% endcapture %}
{% assign tab-flashable = tab-flashable | split: "////////" %}

{% capture tab-avoid %}
This section is a warning against buying certain carts for ntrboot. These carts may look and sound similar to other ntrboot carts.
{:.alert .alert-warning}

## Generic Ace3DS+ clones
![208in1](/assets/images/ds_carts/208in1.png){:.float-start .me-3}  ![Unlabelled Ace3DS+](/assets/images/ds_carts/ace3ds-nolabel.png){:.float-start .me-3}

These carts do not support being flashed with ntrboot. While they are known as Ace3DS+ clones, the hardware is different enough that attempting to flash them with ntrboot will not work! 

These carts usually go by 'X in 1' or 'R4 WOOD' - X referring to the number of games stored on the included micro SD card.

<br/>

## r4isdhc.hk carts

![r4isdhc.hk](/assets/images/ds_carts/r4isdhc_hk.png){:.float-start .me-4}

This Ace3DS+ clone looks similar to an r4isdhc.com cart and is often mistaken as one. 

Key differences to look out for are: 
- The site listed on the cart. 
- This cart has a [red PCB](/assets/images/ds_carts/ace3ds-nolabel.png), 2014+ r4isdhc.com carts have a [yellow PCB](/assets/images/ds_carts/r4isdhc_com_back.png).
- The way the year number is displayed - instead of a red ribbon as shown on the r4isdhc.com 2014+ carts, r4isdhc.hk carts have an outline of a star. 

This cart does not support being flashed with ntrboot firmware.

## r4isdhc.com.cn carts 

![r4isdhc.com.cn](/assets/images/ds_carts/r4isdhc_com_cn.png){:.float-start .me-4}

This Ace3DS+ clone looks similar to an r4isdhc.com cart and is often mistaken as one. 

Key differenced to look out for are: 
- The site listed on the cart. 
- This cart has a [red PCB](/assets/images/ds_carts/ace3ds-nolabel.png), 2014+ r4isdhc.com carts have a [yellow PCB](/assets/images/ds_carts/r4isdhc_com_back.png).
- This cart has a reflective sticker, whereas r4isdhc.com's labels are not reflective.

Earlier carts (~2017) from r4isdhc.com.cn supported being flashed with ntrboot - it could not be flashed back to it's DS firmware meaning it would forever be an ntrboot cart. Newer carts (2020+) do not support being flashed with ntrboot.
{% endcapture %}
{% assign tab-avoid = tab-avoid | split: "////////" %}
{% assign tabs = tab-preflashed | concat: tab-flashable | concat: tab-avoid %}
{% include tabs.html index=0 tabs=tabs %}

{% include_relative include/disclaimer.md %}
