---
title: A Quick Guide on DS Flashcarts
description: DS flashcarts, what there is, and what to buy
tabs:
  - unhacked-simplified: All Systems - Simplified
    unhacked-detailed: All Systems - Detailed
    original-hacked: Other Flashcarts
    non-recommended: Non-Recommended Flashcarts
    alternatives: Alternatives for DSi/3DS Users
  - dsi: DSi
    3ds: 3DS
purchase_links:
  - cart: Ace3DS-X
    links: [
      ["AliExpress [1]","https://www.aliexpress.com/item/1005010681938431.html"],
      ["AliExpress [NDS-Card]","https://www.aliexpress.com/item/1005009800358215.html"],
      ["NDS-Card","https://www.nds-card.com/ProShow.asp?ProID=575"],
    ]
  - cart: R4iLS
    links: [
      ["AliExpress [1]","https://www.aliexpress.com/item/1005006045593536.html"],
      ["AliExpress [2]","https://www.aliexpress.com/item/1005010140376791.html"],
      ["AliExpress [3]","https://www.aliexpress.com/item/1005010140611313.html"],
      ["NDS-Card (Ace3DS+)","https://nds-card.com/ProShow.asp?ProID=511"],
      ["NDS-Card (R4iLS)","https://www.nds-card.com/ProShow.asp?ProID=507"]
    ]
  - cart: Demon
    links: [
      ["NDS-Card (r4isdhc.com)","https://www.nds-card.com/ProShow.asp?ProID=490"],
      ["NDS-Card (r4i-sdhc.com)","https://www.nds-card.com/ProShow.asp?ProID=146"]
    ]
  - cart: DSPico
    links: [
      ["AliExpress [1] (Injection Moulded Shell; Micro USB)", "https://www.aliexpress.com/item/1005011543735291.html"],
      ["AliExpress [2] (Injection Moulded Shell; USB-C)","https://www.aliexpress.com/item/1005007535764512.html"],
      ["AliExpress [3] (3D-Printed Shell)","https://aliexpress.com/item/1005010650741717.html"],
      ["Phenom Mod (US; Pre-orders; USB-C Version)", "https://store.phenommod.com/?product=dspico-pre-order"],
      ["LaserBear (US; Coming soon)", "https://www.laserbear.net/products/dspico"],
      ["Kaico Labs (UK & EU; Coming soon)", "https://kaicolabs.com/product/dspico-by-lnh/"]
    ]
---
Here are the best DS flashcarts currently available on the market. **If you're looking for a GBA flashcart, see the [GBA quick start guide](gba-quick-start-guide).** For other consoles, see the [quick start guide list](index.html).
{:.alert .alert-info}

## READ FIRST

1. The market contains a huge array of R4 clones; often using their own kernels and are not compatible with each other.
1. Do **not** use 'R4' websites to purchase flashcarts as they are often scammy and don't give refunds, Stick to more general places like eBay, AliExpress and Amazon.
   - Etsy, Temu & Shein are usually not recommended due to selling flashcarts for much higher prices than eBay or AliExpress. 
   - The exception to the R4 site rule is NDS-Card, hence why we have links to their site for most flashcarts. It may be an option if AliExpress does not ship to your country.
1. Do **not** follow YouTube setup guides, as there are many reproduction carts in the market and 99% of guides are outdated.
1. Do **not** buy a flashcart with a pre-loaded SD card. These SD cards are very cheap and will usually die on you within weeks. You will **not** be able to recover the files stored on them. Save yourself the hassle and buy a recognised name-brand microSD card separately, being cautious of SD card scams. For more information check out our page on **[Counterfeit MicroSD cards](microsd-fakes)**

<details markdown="1">
<summary><b>Guides & Info</b></summary>
- Need to identify your cart? [Here's a handy guide](https://www.reddit.com/r/flashcarts/comments/rdl55f/things_i_look_at_when_i_identify_flashcarts/)!
- Need firmware? Refer to the [Flashcard Archive](https://archive.flashcarts.net). Here you can compare the website listed on your flashcart to find the correct kernel for you. Feel free to ask for help in the [DS⁽ⁱ⁾ Mode Hacking](https://discord.gg/fCzqcWteC4) Discord server (English only) if you have trouble identifying your cart! You can also make a post in the [r/flashcarts](https://reddit.com/r/flashcarts) subreddit if you prefer.
- Want to install YSMenu? Refer to the [YSMenu extended compatibility list](ysmenu-compat-ext). **Not all carts are compatible with YSMenu!** If you are unsure, ask before you install. You risk bricking your cart with the wrong firmware!
- Older DS flashcarts may not work on the stock firmware of a DSi/3DS. Instead of being able to boot the cart, you will be presented with an error message instead. See the ['Alternative Options for DSi/3DS Users'](?tab=alternatives) section for more information about why this happens and how to solve it!
</details>

### Important to note
- **GBA emulation on these consoles is not perfect, refer to the [GBARunner2 Wiki](https://wiki.gbatemp.net/wiki/GBARunner2#DS_Compatibility_List) to check game compatibility.**
- **None of the carts listed here play 3DS games. Install CFW to run 3DS games, more details in the [3DS section](?tab=alternatives&tab1=3ds).**

## Flashcarts

{% capture tab-unhacked-simplified %}
## Recommended Flashcarts - Simplified Information - All Systems

Looking for a flashcart to use ntrboot? [Click here.](ntrboot-ds-carts) If you are looking for a flashcart to play DS Games and homebrew, see below.
{:.alert .alert-warning}

### DSpico

![DSpico](/assets/images/ds_carts/dspico.png)

The DSpico is a new flashcart created by the LNH Team. It is the world's first open-source DS(i) flashcart that supports full DSi mode when it is used on a DSi or 3DS, unlike other flashcarts on the market that are DS mode only. Its open-source design means anyone can improve and modify it, as well as manufacture their own DSpico flashcarts. The DSpico features both a development port and a USB port, both of which can be used to extend the functionality of the cart; the latter is also used for firmware flashing.

**Pros**:
- Actively supported with new updates.
- Full DSi-mode support when using a DSi or 3DS to access DSi-enhanced features in supported games and run DSiWare. 
    - Note: These features are unavailable on an Original DS or DS Lite.
- Works on all DS & 3DS family consoles on all firmware versions depending on the firmware flashed to the cart.
- Uses a combination of Pico-Launcher (frontend) and Pico-Loader (ROM loader) as its main kernel. Pico-Loader has fairly good game compatibility.
- Can be re-flashed without requiring the use of a console.

**Cons**:
- Quality of the shell may differ depending on the seller you get it from. Some use 3D Printed shells while others use Injection Moulded shells. Both will generally be fine for most however.
- Pico-Loader currently does not support cheats nor soft-reset in games; this may be added in the future, however.
- Compiling the firmware may be difficult for some users. This would only be required if you receive a DSpico which has not been pre-flashed with any firmware, or if the provided firmware does not work with your console (e.g., Hybrid bootloader firmware on a stock DSi/3DS).

{% assign pico_data = site.data.pico_ver %}

LNH Team Website: <https://www.lnh-team.org/>  
Setup Guide: <https://github.com/LNH-team/dspico/blob/develop/GUIDE.md>  
Pico-Launcher build by flashcarts.net: [Pico-Launcher {{pico_data.launcher_ver}} + Pico-Loader {{pico_data.loader_ver}}](https://picoarchive.cdn.blobfrii.com/pico_package_DSPICO.zip?picoloader={{pico_data.loader_ver}}&picolauncher={{pico_data.launcher_ver}}&fcnetrev={{pico_data.fcnetrev}})

Purchase links:
{% for item in page.purchase_links[3].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

---

### Ace3DS X

![Ace3DS X](/assets/images/ds_carts/ace3dsx.png)

The Ace3DS X is based upon the Ace3DS+ with a switch to use for 3DS ntrboot (see the ntrboot link above if you require this). This is a good option for 3DS users but the below Ace3DS+ carts are generally a cheaper option if you don't have a 3DS.

**Pros**:
- Uses the Ace Wood R4 kernel which has good support for ROM hacks and games with DS-Wii connectivity.
- Works on all DS & 3DS family consoles on all firmware versions.

**Cons**:
- Poor shell quality, may not fit well in some consoles.
- Using Slot-2 accessories in the stock kernel will require a reset to the menu before they are functional.
- Ace Wood R4 kernel lacks anti-piracy patches for a few games (But has easy workarounds).
<details markdown="1">
<summary><b>Resolving Anti-Piracy Issues</b></summary>
Ace Wood R4 has anti-piracy issues with some games, namely with Pokémon Black & White 2. To play these games you will have to manually [AP patch their ROMs](https://gbatemp.net/download/35735/), or use a [cheat database](https://gbatemp.net/threads/488711/) and enable the Anti-Piracy bypass cheat before starting the game.
</details>

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/ace3ds_r4ils/>

Purchase links:
{% for item in page.purchase_links[0].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

This cart is also available on Amazon and eBay if AliExpress is not available. Be sure to shop around to find the best price.

---

### Ace3DS+/R4iLS Clones
![r4isdhc.com.cn R4iLS clone](/assets/images/ds_carts/r4isdhc_com_cn.png)

These carts are clones of the Ace3DS+ and R4iLS (which are almost identical to each other) that are a cheaper alternative to the Ace3DS X.
If you're simply looking to play DS games and run homebrew, this is the most recommended option. Usually found as r4isdhc.com.cn carts, as r4isdhc.hk carts with a year number of 2020 or newer inside a star shape, or as unlabeled carts with a red PCB on the back.

**Pros**:
- Uses the Ace Wood R4 kernel which has good support for ROM hacks and games with DS-Wii connectivity.
- Cheaper than the Ace3DS X and easily available.
- Works on all DS & 3DS consoles on all firmware versions.

**Cons**:
- Poor shell quality, may not fit well in some consoles.
- Using Slot-2 accessories in the stock kernel will require a reset to the menu before they are functional.
- Ace Wood R4 kernel lacks anti-piracy patches for a few games (But has easy workarounds).
<details markdown="1">
<summary><b>Resolving Anti-Piracy Issues</b></summary>
Ace Wood R4 has anti-piracy issues with some games, namely with Pokémon Black & White 2. To play these games you will have to manually [AP patch their ROMs](https://gbatemp.net/download/35735/), or use a [cheat database](https://gbatemp.net/threads/488711/) and enable the Anti-Piracy bypass cheat before starting the game.
</details>

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/ace3ds_r4ils/>

Purchase links:
{% for item in page.purchase_links[1].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

This cart is also available on Amazon and eBay if AliExpress is not available. Be sure to shop around to find the best price.

---

### DSTTi "DEMON" Clones
![r4isdhc.com gold cart](/assets/images/ds_carts/r4isdhc_com_front.png)

These are a clone of the DSTTi, previously listed here as "DSTTi Timebomb Clones". These carts are still a decent choice if the Ace3DS X or Ace3DS+ is not available to you. Usually found as r4i-sdhc.com or r4isdhc.com (not .hk) 2014+ carts, branded as Gold Pro, RTS Lite and Dual Core. (There is no difference in hardware between them, only color/label differences)

{:.alert .alert-danger}
**There have been reports of users buying DSTTi "DEMON" carts from AliExpress and instead receiving an Ace3DS+/R4iLS Clone, but still labeled to look like a DEMON cart. If you are looking to purchase a DEMON cart, we would recommend getting one from NDS-Card at the moment.**

<details markdown="1">
<summary><b>What to look for in user reviews</b></summary>
- Check to see if the latest user review photos show the cart's shell as having deeper shorter indents rather than longer shallow indents, the former means a relabeled R4iLS clone.
- Check latest user reviews to see if the cart has a **Red PCB**, shows "Could not find _DSMENU.DAT" or has an "Ace3DS" interface. This also means a relabeled R4iLS clone.


![DEMON and R4iLS Cart Comparison](/assets/images/ds_carts/demonr4ils.png){:width="600"}
</details>

**Pros**:
- Higher quality shell then the Ace3DS+/X & R4iLS carts and generally fits better in most consoles.
- Works on all DS & 3DS consoles on all firmware versions.

**Cons**:
- The supported YSMenu & R4iMenu kernels both have trade-offs;
    - YSMenu does not support newer ROM hacks and has some compatibility quirks when run on these specific clones.
    - R4iMenu does not work with some newer homebrew and it has a few issues with it's cheat system.
- Often sold at a higher price than Ace3DS+/R4iLS clones.

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/r4i-sdhc/>

Purchase links:
{% for item in page.purchase_links[2].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

This cart is also available on Amazon and eBay if AliExpress is not available. Be sure to shop around to find the best price.

{% endcapture %}
{% assign tab-unhacked-simplified = tab-unhacked-simplified | split: "////////" %}

{% capture tab-unhacked-detailed %}
## Recommended Flashcarts - Detailed Information - All Systems

Read this section if you would like to see more information about the flashcarts we recommend.

### DSpico

![DSpico](/assets/images/ds_carts/dspico.png){:.float-start .me-3}

The DSpico is a new flashcart created by the LNH Team. It is the world's first open-source DS(i) flashcart that supports full DSi mode when it is used on a DSi or 3DS, unlike other flashcarts on the market that are DS mode only. Its open-source design means anyone can improve and modify it, as well as manufacture their own DSpico flashcarts.

The DSpico features both a development port and a USB port. The development port can be used to create new peripherals for use with the DSpico; more information about it can be found in the [dspico-hardware GitHub repository](https://github.com/LNH-team/dspico-hardware?tab=readme-ov-file#-development). The USB port is used for firmware flashing and can also be used for additional functionality within homebrew applications. Some of the [DSpico USB examples](https://github.com/LNH-team/dspico-usb-examples/) include accessing the contents of the cart's microSD card over USB and using your DSi/3DS as a webcam.

It supports all DS, DSi and 3DS consoles with their latest firmware versions, provided the cart is flashed with the WRFUxxed firmware. The DSpico also supports 3DS and DSi ntrboot, which is useful for modding and recovering from bricks. The cart is currently in active development, and the DSi-mode support allows you to access DSi-enhanced features (such as the camera and WPA2 Wifi) in games that support it, as well as having the ability to run DSiWare. These features are not available on an original DS or DS Lite, as you will be limited to DS mode on those consoles.

The main kernel intended for the DSpico is Pico-Launcher, which runs games and homebrew using Pico-Loader. It features a modern Material UI-style interface that can display your games in various ways, including a coverflow-style format in which you can add box art for your games! It features rich theme customisation with support for playing background music. For more information on creating themes for the DSpico, [check the Themes page on the LNH Team Github.](https://github.com/LNH-team/pico-launcher/blob/develop/docs/Themes.md) One downside of Pico-Loader (and by extension, Pico-Launcher) is that neither cheats nor soft-reset in games are supported; however, support may be added in a future update.

Due to its open-source nature, the DSpico can be obtained from various sellers (or you could even make your own!). However, bear in mind that the quality of the DSpico, particularly its shell, may differ depending on where you buy it. Some sellers will ship it with a 3D-printed shell, whereas others may send it with an injection-moulded shell instead. The injection-moulded shells are better; however, both should work just fine for most people. USB-C variants of the hardware also exist and are currently being sold by Phenom Mod in the US.

Some sellers may choose to sell the DSpico without flashing the firmware to it. If this is the case for your cart, or you need to change or update the firmware, you will have to compile it yourself. Compiling the firmware requires the use of a Linux environment and some knowledge of the command line. The steps to do this are laid out in the [DSpico setup guide](https://github.com/LNH-team/dspico/blob/develop/GUIDE.md). Alternatively, another option is to use Docker. [Aar has made a simple guide for Windows users](https://www.youtube.com/watch?v=o7IuaewHNTQ) that takes you through how to compile the WRFUxxed firmware using this method. For users already familiar with Docker, the Dockerfile can be found in [Doomaholic's GitHub Gist](https://gist.github.com/synthic/f9396062d28144823ee8606eba101b2e).

#### Obtaining and Setup

Links to purchase the DSpico are provided below, but they may not be the cheapest option, as they're one of many listings:

{% for item in page.purchase_links[3].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

LNH Team Website: <https://www.lnh-team.org/>  
Setup Guide: <https://github.com/LNH-team/dspico/blob/develop/GUIDE.md>

##### Kernels

- Pico-Launcher build by flashcarts.net: [Pico-Launcher {{pico_data.launcher_ver}} + Pico-Loader {{pico_data.loader_ver}}](https://picoarchive.cdn.blobfrii.com/pico_package_DSPICO.zip?picoloader={{pico_data.loader_ver}}&picolauncher={{pico_data.launcher_ver}}&fcnetrev={{pico_data.fcnetrev}})
- TWiLight Menu++ (follow the steps for Pico-Loader): [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard)
- AKMenu-Next (currently does not support DSi-mode; follow the steps for adding Pico-Loader): [AKMenu-Next](https://sanrax.github.io/flashcart-guides/tutorials/akmenu-next/#__tabbed_1_1) 

---

### Ace3DS X
![Ace3DS X](/assets/images/ds_carts/ace3dsx.png){:.float-start .me-3}

The Ace3DS X is a version of the Ace3DS+ (seen below) that also supports ntrboot with just a flick of a switch.

Ntrboot is a method that allows you to hack your 3DS easily, or fix a bricked 3DS family console. The Ace3DS X makes ntrboot easily accessible without any modification required, such as flashing the cartridge!

For general usage outside of hacking or unbricking, Ace3DS X clones are a good cheap option, however they have a few downsides. Due to iffy shell quality some report that it doesn't fit well into their consoles. It also runs an unofficial fork of Wood which lacks anti-piracy patches for a few games, namely Pokémon Black & White 2. To play these games you will have to manually [AP patch their ROMs](https://gbatemp.net/download/35735/), or use a [cheat database](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases) and enable the Anti-Piracy bypass cheat before starting the game. Its biggest benefit is that it works on all DS family consoles up to latest 3DS consoles.

#### Obtaining and Setup
Searching for "ace3ds" on AliExpress, Amazon or eBay usually returns this cart.

Links to AliExpress & NDS-Card are provided below, but they may not be the cheapest option as they're one of many listings:

Purchase links:
{% for item in page.purchase_links[0].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/ace3ds_r4ils/>

##### Kernels

- Ace Wood R4 Kernel: [Ace3DS+/R4iLS Wood R4 v1.62](https://archive.flashcarts.net/Ace3DS+_R4iLS/Ace3DS+_R4iLS_Wood_R4_1.62.zip)
- AceOS Kernel (Ace Wood R4 + Built-in Emulators): [AceOS](https://github.com/flashcarts/AOS/#setup)

---

### Ace3DS+/R4iLS Clones
![Ace3DS+ Original](/assets/images/ds_carts/ace3ds+.png){:.float-start .me-3}

These carts are clones of the Ace3DS+ or R4iLS flashcarts, compatible with all DS, DSi, and 3DS consoles, even unhacked ones on the latest firmware. These carts **do not** work with ntrboot - see the [DSpico](?tab=unhacked-detailed#dspico) instead if this is a feature that you may need. The upside is that these carts are often cheaper than the DSpico.

Ace3DS+/R4iLS clones are an excellent option, however they have a few downsides. Due to iffy shell quality some report that it doesn't fit well into their consoles. It also runs an unofficial fork of Wood which lacks anti-piracy patches for a few games, namely Pokémon Black & White 2. To play these games you will have to manually [AP patch their ROMs](https://gbatemp.net/download/35735/), or use a [cheat database](https://github.com/DeadSkullzJr/NDS-i-Cheat-Databases/releases) and enable the Anti-Piracy bypass cheat before starting the game.

#### Variants
Multiple variations of this cart exist, and they're all clones of the Ace3DS+ or the R4iLS. Here are the most common ones:

![r4isdhc.com.cn R4iLS clone](/assets/images/ds_carts/r4isdhc_com_cn.png)
![r4isdhc.hk R4iLS clone](/assets/images/ds_carts/r4isdhc_hk.png)
![208 in 1 cart](/assets/images/ds_carts/208in1.png)
![Ace3DS+ unlabeled](/assets/images/ds_carts/ace3ds-nolabel.png)

These carts are sold under a variety of brandings. The 2020 and later carts labeled as r4isdhc**.com.cn** and r4isdhc**.hk** are R4iLS clones. "208-in-1" and unlabeled carts with a red PCB are Ace3DS+ or R4iLS clones. All of these carts will perform the same and use the same kernel, so choose whichever label style you like.

**Warning regarding r4isdhc.hk variant:** Not all carts labeled with the r4isdhc.hk URL are R4iLS/Ace3DS+ clones. If you choose to buy this variant, look out for the following characteristics to make sure you get the correct cart:

- The year number on the label should have a star shaped outline, and NOT a ribbon style
- The label should be silver colored
- The label should have the text "Smart Update" on it
- The label should NOT have "Gold Pro", "Real Time Save", or "RTS LITE" on it
- The PCB should be a red color

### Obtaining and Setup
Searching "r4 wood" on AliExpress or "r4" on eBay usually returns this cart.

Links to AliExpress & NDS-Card are provided below, but they may not be the cheapest option as they're one of many listings:

Purchase links:
{% for item in page.purchase_links[1].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/ace3ds_r4ils/>

##### Kernels

- Ace Wood R4 Kernel: [Ace3DS+/R4iLS Wood R4 v1.62](https://archive.flashcarts.net/Ace3DS+_R4iLS/Ace3DS+_R4iLS_Wood_R4_1.62.zip)
- AceOS Kernel (Ace Wood R4 + Built-in Emulators): [AceOS](https://github.com/flashcarts/AOS/#setup)

---

### DSTTi "DEMON" Clones
![r4i-sdhc.com 3DS RTS](/assets/images/ds_carts/r4i-sdhc_3ds_rts.png){:.float-start .me-3}

These common carts are clones of the DSTTi, and are known as "timebomb" carts because their stock kernels used to contain a date-check mechanism that would throw an error past a certain date. The latest releases of the stock kernel for these carts no longer contain this timebomb, so users who want to use stock kernel-specific features like RTS have the option of using it instead of the recommended YSMenu. These carts are compatible with all DS, DSi, and 3DS consoles - even on the latest firmware - so they make a decent choice for unhacked DSi/3DS users, but the [DSpico](?tab=unhacked-detailed#dspico) is recommended instead if possible.

Most of these carts sold today are labeled r4isdhc.**com** or r4i-sdhc.**com**, but others do exist. Ace3DS+ clones are recommended over this cart due to the Wood kernel having higher compatibility with games and romhacks, as well as certain features like Wii connectivity in DS games. One notable advantage of these carts over Ace3DS+ clones is that they support ntrboot for installing CFW on a 3DS, and can also be flashed with DSi ntrboot for unbricking DSi consoles. However, the [DSpico](?tab=unhacked-detailed#dspico) above is preferable for ntrboot use, since it also supports both 3DS and DSi ntrboot and is generally the better flashcart.

There is a lot of misinformation surrounding timebombs and what they do. See our [Timebomb Misconceptions](ds-timebomb) page for more details.

#### Variants
![r4isdhc.com gold cart](/assets/images/ds_carts/r4isdhc_com_front.png)
![r4isdhc.com dual-core cart](/assets/images/ds_carts/r4isdhc_com_back.png)
![Unlabelled timebomb clone](/assets/images/ds_carts/timebomb_back.png)

#### Obtaining and Setup

{:.alert .alert-danger}
**There have been reports of users buying DSTTi "DEMON" carts from AliExpress and instead receiving an Ace3DS+/R4iLS Clone, but still labeled to look like a DEMON cart. If you are looking to purchase a DEMON cart, we would recommend getting one from NDS-Card at the moment.**

<details markdown="1">
<summary><b>What to look for in user reviews</b></summary>
- Check to see if the latest user review photos show the cart's shell as having deeper shorter indents rather than longer shallow indents, the former means a relabeled R4iLS clone.
- Check latest user reviews to see if the cart has a **Red PCB**, shows "Could not find _DSMENU.DAT" or has an "Ace3DS" interface. This also means a relabeled R4iLS clone.


![DEMON and R4iLS Cart Comparison](/assets/images/ds_carts/demonr4ils.png){:width="600"}
</details>

This cart is only recommended **if you cannot buy a DSpico, Ace3DS X or an Ace3DS+ clone**. Usually costs $5-10 USD. Searching "r4 gold pro" on AliExpress or eBay usually returns this cart.

Links to NDS-Card are provided below. These are not the cheapest listings, but are guaranteed to send out this cart:

Purchase links:
{% for item in page.purchase_links[2].links %}
- [{{item[0]}}]({{item[1]}})
{% endfor %}

Setup guide: <https://sanrax.github.io/flashcart-guides/cart-guides/r4i-sdhc/>

##### Kernels

- Kernel: [YSMenu](https://gbatemp.net/download/35737/)
- Alternate Kernel:
    - [r4isdhc.com 4.3b](https://archive.flashcarts.net/r4isdhc.com/old/r4isdhc.com_2014-and-above_DEMON_4.3.zip)
    - [r4i-sdhc.com 1.87b](https://archive.flashcarts.net/r4i-sdhc.com/old/r4i-sdhc.com_DEMON_1.87b.zip)
{% endcapture %}
{% assign tab-unhacked-detailed = tab-unhacked-detailed | split: "////////" %}

{% capture tab-original-hacked %}
## Other Flashcarts

These are flashcarts which we don't necessarily recommend but are available to buy. Information is provided here about these carts for people who may already have one.

**Note**: These flashcarts will only work on the DS, DS Lite, and hacked 3DS/DSi systems. They **will not** work on unhacked 3DS/DSi systems.

## DSTT
![DSTT](./assets/images/ds_carts/dstt.png){:.float-start .me-3}

The original DSTT is still being sold by NDS-Card. Since this flashcart does not work on unhacked 3DS/DSi systems, we have not added it to our list of recommended flashcarts. 

This cart may be useful for ntrboot. NDS-Card appear to have sent out genuine DSTTs which can be used for that purpose. Though if you need a flashcart for ntrboot, a [DSpico](?tab=unhacked-detailed#dspico) will still be a better choice over this cart.

### Obtaining and Setup
You can find a link to NDS-Card's listing below. If NDS-Card does not ship to your country, you may be able to find it on second-hand marketplaces for cheap.

- NDS-Card: <https://www.nds-card.com/ProShow.asp?ProID=157>

You should avoid the original TTMenu kernel just in case you are sent a DSTT clone, you will risk bricking your flashcart if you attempt to use it. We would recommend using YSMenu or RetroGameFan's repacked version of TTMenu instead.

- Kernel: [DSTTi Clone YSMenu/TTMenu](https://gbatemp.net/download/35737/)
{% endcapture %}
{% assign tab-original-hacked = tab-original-hacked | split: "////////" %}

{% capture tab-non-recommended %}
## Non-Recommended Flashcarts
These are carts that you may encounter but are generally NOT recommended.
{:.alert .alert-warning}

## EZ Flash Parallel

![EZ Flash Parallel](/assets/images/ds_carts/ez_flash_parallel.png){:.float-start .me-3 width="150px" height="150px"}

The EZ Flash Parallel is a new flashcart on the market with a fairly stylish shell design. It will work on the DS/DS Lite as well as unhacked DSi/3DS consoles. It comes pre-flashed with 3DS ntrboot meaning that you can use it to unbrick your console or to install custom firmware. Unfortunately, that's where the positives mostly end for this flashcart.

There are several issues that result in this flashcart not being recommended:
<br><br>
- Very slow SD card speeds. This causes slowdown in some games, especially those with video cutscenes.
- Multiple reports of fitment issues with the cart, with the shell being too thick for some DS consoles, therefore not fitting properly.
- Reports of users also needing to use the paper trick to use the cart with the PCB pins not making good contact. Both these issues demonstrate the inconsistent build quality of this flashcart.
- Sleep mode is non-functional, causing a strobing effect when it is used [(GBATemp Post)](https://gbatemp.net/threads/652317/). It is not clear if this issue will be fixed any time soon.

<details markdown="1">
<summary><b>FPGA Misconceptions</b></summary>
One common misconception about the EZ Flash Parallel is that the FPGA on the cart is currently being left unused. This isn't true. The FPGA is the brains of the flashcart, it is being used to handle cart commands and SD I/O, much like how other flashcarts with an FPGA use them. The actual reason why the FPGA was listed as a selling point on EZ Flash's website is because it is being made entirely within China, though the meaning behind this seems to have been lost in translation.
</details>

<details markdown="1">
<summary><b>GPL Non-compliance</b></summary>
Other issues which some community members feel are worth mentioning about this cart is EZ Flash's attitude to open source. EZ Flash stated they were planning to release the source code to their DLDI - which they aren't required to do. However, this has not happened many months later. Similarly, they are refusing to give out the source code to the cart's kernel. The EZDS kernel is based on WoodRPG, which is licensed under GPLv3. Since the license requires them to provide the source code to the kernel, they are violating the license terms. They are also violating the GPLv2 license of Homebrew Menu as functions from it have been found in the EZP's firmware. In the past, EZ Flash have respected the licenses of any open source software that they used in their products, which is why it's strange for them to not do so now.
</details>

Due to this flashcart's unusually high price - which often sells for around 25 USD, whereas most other carts sell between 5-10 USD - and the issues listed above, we cannot recommend this cart to people looking to buy one. If you own an EZ Flash Parallel, please update to the latest kernel (1.06) as soon as possible as it fixes a bug where the game `Casper's Scare School: Spooky Sports Day` can brick the flashcart due to a missing save patch.

## R4DS Pro
![R4DS Pro](/assets/images/ds_carts/r4ds_pro.png){:.float-start .me-2}

While on the surface this may look like an original R4 clone, and is often described as an original R4, this cart is not related to it at all. It is based on the R4 Ultra, which is itself a derivative of the Acekard 2. However, it doesn't pass AKAIO's clone checks, therefore making BL2CK OS the best kernel choice like most other Acekard 2 based carts. Do note however that due to a quirk mentioned below, it uses it's own version of BL2CK: [BL2CK 1.31.0 (r4dspro.com)](https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0_r4dspro.com.zip)

BL2CK tends to avoid the AP-patching issues that Ace3DS+ clones have, however it has some problems specific to this cart:

- Attempting to access the `Minigames` section in `New Super Mario bros` crashes on a black screen.
- Attempting to change WFC settings in some games will cause the console to freeze.
- DS Download Play does not work in most games.
- Slow SD card speeds, especially when using homebrew due to it only supporting a single-block DLDI.
- Sleep mode does not work on some R4DS Pro units, causing a strobing effect [(Reddit Post)](https://www.reddit.com/r/flashcarts/s/W8LKdc3isr).

Do not attempt to run YSMenu on this flashcart, doing so will cause it to **brick**!
{:.alert .alert-warning}

We do not recommend this flashcart due to an increase in reports of them being dead on arrival. If the cart isn't DOA, it's likely that it will die after a short period of time. Some people have reported that it took less than a week for their R4DS Pro to become a paperweight.
The [Ace3DS+/R4iLS clones](?tab=unhacked#ace3dsr4ils-clones) on the market are generally just as cheap and do not have the issues listed above. We would suggest that you buy one of them instead.

## AliExpress "DSTWO"s
![DSTWO WOS MINI](/assets/images/ds_carts/dstwo_wos_mini.png){:.float-start .me-3 width="150px" height="150px"}

These are flashcarts that have been spotted on AliExpress which claim to be a SuperCard DSTWO. In reality, they are Ace3DS+ clones with a misleading description and sticker. Due to the misleading information in these listings and their high prices, we do not recommend that you go out and buy one.

These carts typically come with a pre-loaded SD card. The files on the SD card includes a maintained version of AOS (known as Wood Beyond) which has been skinned to look like the DSTWOs EvolutionOS, as well as some pirated scene ROMs. The SD cards are low quality and will fail fairly quickly.

DSTWOs haven't been in production for a few years now. If you see a listing for one on AliExpress, chances are that it is just an Ace3DS+ clone with a false description.

## R4 Gold 3DS RTS

![R4 Gold 3DS RTS](./assets/images/ds_carts/r4i-gold_com_RTS.png){:.float-start .me-3}

This is a flashcart by r4i-gold.com which appears to be a clone of the pk3ds.com cart. It has both a micro SD card slot and a proprietary USB port. The USB port appears to be used to provide power to the flashcart so that it can upgrade it's firmware from the micro SD card. We currently do not have any archive of the firmware upgrades for this flashcart.

This flashcart was also being sold as a "DSTTi Gold from ndstt.com" on AliExpress. This flashcart wasn't made by the DSTT team, it's just a relabelled version of this flashcart.

We have decided to move this flashcart to the non-recommended list due to reports of carts being dead on arrival. We cannot guarantee that you will receive a working flashcart if you decide to buy one of these.

## R4 DS
![R4 DS](/assets/images/ds_carts/r4ds.png){:.float-start .me-3}

Identical (1:1) clones of the original R4 cart were available on AliExpress, but they are not recommended due to only supporting 2 GB or smaller microSD cards. They also do not work in unhacked DSi and 3DS systems. Even on hacked 3DS and DSi systems, they can only be launched via TWiLight Menu++ or homebrew like [NTR_Launcher](https://github.com/ApacheThunder/NTR_Launcher), due to not showing up in the console's home menu when inserted.

Despite all these flaws listed above, they do however use a great kernel - Official Wood R4 1.62, which has near-perfect game compatibility.

These clones on AliExpress can be identified by their green PCB with the text "ROHS Card 7a", inside of a grey, unlabeled shell. Even though they can be found for relatively cheap and are still commonly available used on other online marketplaces, your money would likely be better invested in one of the [recommended carts](?tab=unhacked) instead.

## R4i Gold 3DS Plus
![R4i Gold 3DS Plus](/assets/images/ds_carts/r4i_gold_3ds_plus.png){:.float-start .me-3}

This cart halted production at the start of 2020. They were formerly highly recommended carts with a highly compatible and feature-rich kernel (Wood R4 1.64), but their last batch was faulty and cannot play NDS ROMs on their stock kernel - thus, they are no longer recommended. Do not follow any old advice saying to buy them.

This refers specifically to the *R4i Gold 3DS Plus* from **r4ids.cn**, they should not be confused with carts from any other website.

If you do have one of the faulty carts, you can use [BL2CK](https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0.zip) or [TwiLight Menu ++](https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard) instead to play NDS ROMs. Though you will miss out on the features that Wood R4 1.64 provides.

## Stargate3DS

![Stargate3DS](./assets/images/ds_carts/stargate3ds.png){:.float-start .me-3}

Stargate3DS flashcarts are still being made to this day. However, they are not recommended in the context of a DS flashcart for a few reasons. The major reason being that it is only usable on a 3DS, you cannot use it's DS mode on a DS, DS Lite, or DSi due to the shape of the cartridge. The DS mode of this flashcart becomes inaccessible once you have installed Luma3DS onto your 3DS. There are ways around this however. One option is to install a Stage2 launcher, we have one available in the flashcard-archive ([SG_Launcher](https://archive.flashcarts.net/stargate-3ds.com/SG_Launcher_CFW)). The other option is to [compile Luma3DS without the `patchTwlWhitelistChecks` function](https://github.com/LumaTeam/Luma3DS/issues/2046#issuecomment-2245411574). Do note however that the latter option may be less desirable if you intend to use other flashcarts that do not pass the console's whitelist checks. The Stargate3DS does have exFat support built in. However, this can present issues in DS mode as the DLDI driver only works with Fat32 formatted microSD cards. The kernel used in the DS mode also has a broken cheat engine. This of course means that you cannot use cheat codes in games without using an alternative to the kernel, such as TWiLight Menu++. For titles that require anti-piracy patches (ie. Pokemon Black/White 2), you will have to manually patch them as AP-bypass cheats will be unavailable to you. If you are looking for a DS flashcart to use in your 3DS, consider a [DSpico](?tab=unhacked-detailed#dspico) instead. It doesn't require any workarounds to get it to boot in custom firmware and can be used in any DS console.

In the context of the 3DS, it's not the best option you could choose to play 3DS games. It can't play ROM hacks, eShop titles, homebrew, and some later titles that use a newer anti-piracy standard. A better option for most people would be installing [custom firmware](https://3ds.hacks.guide) to your 3DS. It is easy to do and it allows you to install 3DS backups directly to your console. You will need custom firmware to dump your 3DS ROMs for use in the flashcart anyways. CFW does lack the ability to hotswap games and save files between consoles however, which this cart is able to do. 

The Stargate3DS goes for around $30 on AliExpress. As this is a very niche cart at the end of the day, we feel that it may not be worth it for most people. Hence why we have put it in the non-recommended flashcarts section.
{% endcapture %}
{% assign tab-non-recommended = tab-non-recommended | split: "////////" %}

{% capture tab-alternatives %}

## Alternative Options for DSi/3DS Users

{% capture tab-dsi %}
On the DSi/DSi XL consoles, Nintendo introduced a whitelist and RSA signatures in an attempt to prevent flashcarts from functioning, so you need to be careful which flashcart you buy to use it on a DSi. Because of this the [DSpico](?tab=unhacked-detailed#dspico) is recommended if you choose to buy a flashcart for use on a DSi, as it is supported all the way up to the latest firmware version.

If you boot an unsupported flashcart on a stock DSi, it will show black screens with white text that says "[An error has occurred](https://i.imgur.com/gE47UKA.png)". This can be bypassed by installing CFW on your DSi. Specifically, Unlaunch is required - with it, you will be able to load the flashcart from the DSi Menu if it was installed with launcher patches enabled or from Unlaunch itself, TWiLight Menu++, or hiyaCFW regardless whether or not Unlaunch's launcher patches are enabled.

On a hacked DSi, there is also the option to play DS games using nds-bootstrap (via [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/) or [AKMenu-Next](https://sanrax.github.io/flashcart-guides/tutorials/akmenu-next/)). This allows games to be loaded from the DSi's SD card without needing to purchase anything besides an SD card if you don't already have one. However, nds-bootstrap's [compatibility](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview) isn't quite as good as that of flashcarts so buying a flashcart can still be worthwhile if you run into incompatible games. It is generally recommended to try the CFW route first, and only buy a flashcart if you want to play a game that isn't compatible, or want the portability of a flashcart - being able to share the same save files by simply moving the flashcart over to another DS console.

See [dsi.cfw.guide](https://dsi.cfw.guide) for a guide on how to install CFW on your DSi.
{% endcapture %}
{% assign tab-dsi = tab-dsi | split: "////////" %}

{% capture tab-3ds %}
On the 3DS family of consoles (including the 2DS and XL variants) there is a distinction between flashcarts that play 3DS games and flashcarts that play DS games. Flashcarts that play 3DS games are rendered mostly useless by the existence of CFW, which has *better* compatibility and is completely free, while 3DS flashcarts are very expensive. CFW also has other benefits over 3DS flashcarts such as the ability to run homebrew and emulators.

Flashcarts for playing DS games on the other hand can still be useful, and everything in the [DSi](?tab1=dsi#alternative-options-for-dsi3ds-users) section above applies to DS mode flashcarts on the 3DS as well. That is, [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds.html) & [AKMenu-Next](https://sanrax.github.io/flashcart-guides/tutorials/akmenu-next/#__tabbed_1_3) being a good option, but flashcarts for DS games having slightly higher compatibility. The [DSpico](?tab=unhacked-detailed#dspico) is the recommended DS flashcart for 3DS users as it supports the latest 3DS firmware without needing CFW, and can be flashed with ntrboot if you ever need it. Any DS flashcart can be run with CFW, either from the 3DS HOME Menu or TWiLight Menu++.

See [3ds.hacks.guide](https://3ds.hacks.guide) for how to install CFW on your 3DS.
{% endcapture %}
{% assign tab-3ds = tab-3ds | split: "////////" %}

{% assign tabs = tab-dsi | concat: tab-3ds %}
{% include tabs.html index=1 tabs=tabs %}
{% endcapture %}

{% assign tab-alternatives = tab-alternatives | split: "////////" %}


{% assign tabs = tab-unhacked-simplified | concat: tab-unhacked-detailed | concat: tab-original-hacked | concat: tab-non-recommended | concat: tab-alternatives %}
{% include tabs.html index=0 tabs=tabs %}



{% include_relative include/disclaimer.md %}
