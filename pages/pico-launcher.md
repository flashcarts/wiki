---
title: Pico Launcher Builds
downloads: [
    ["Ace3DS+", "pico_package_ACE3DS.zip"],
    ["Acekard 2", "pico_package_AK2.zip"],
    ["Acekard R.P.G.", "pico_package_AKRPG.zip"],
    ["Datel (Slot-1) [1]","pico_package_DATEL.zip"],
    ["Datel MMD CF (Slot-2)","pico_package_MMCF.zip"],
    ["DSpico", "pico_package_DSPICO.zip"],
    ["DSTT", "pico_package_DSTT.zip"],
    ["M3i Zero GMP-Z003", "pico_package_G003.zip"],
    ["Gateway Blue", "pico_package_GWBLUE.zip"],
    ["GBAMP CF (Slot-2)","pico_package_MPCF.zip"],
    ["M3CF (Slot-2)","pico_package_M3CF.zip"],
    ["M3DS Real", "pico_package_M3DS.zip"],
    ["Original R4/M3 Simply", "pico_package_R4.zip"],
    ["R4DS Pro", "pico_package_R4DSPRO.zip"],
    ["R4iDSN", "pico_package_R4iDSN.zip"],
    ["Stargate 3DS", "pico_package_STARGATE.zip"],
    ["SuperCard (Slot-2) [2]", "pico_package_SUPERCARD.zip"],
    ["SuperCard CF [2]","pico_package_SUPERCARDCF.zip"]
]
---
On this page you will find builds of Pico Launcher, alongside it's loader, Pico Loader.  
These packages are specific to each flashcart family, so it is important that you choose the correct build.
{:.alert .alert-info}

Note that these builds are **unofficial** and in no way are affiliated with the LNH-team.  
If you spot an issue with the packages provided, please [open an issue here first](https://github.com/flashcarts/pico-builder).
{:.alert .alert-danger}

### Downloads

Each package below contains Pico Launcher {{ site.data.pico_ver.launcher_ver }} and Pico Loader {{ site.data.pico_ver.loader_ver }}.

{% for item in page.downloads %}
{% assign cdn = "https://picoarchive.cdn.blobfrii.com/" %}
{% assign pico_data = site.data.pico_ver %}
 - {{ item[0] }} - [{{ item[1] }}]({{cdn}}{{item[1]}}?picoloader={{pico_data.loader_ver}}&picolauncher={{pico_data.launcher_ver}}&fcnetrev={{pico_data.fcnetrev}})
{% endfor %}

#### Footnotes

\[1\] - It is recommended that edo9300's Games 'n' Music custom firmware is installed before using Pico Launcher. It adds support for SDHC cards and auto DLDI patching for homebrew: <https://github.com/edo9300/games-n-music-custom>. To autoboot Pico Launcher, make a copy of `_picoboot.nds` and name that copy to `bootme.nds`.

\[2\] - It is recommended that [edo9300's SCSFW](https://github.com/edo9300/SCSFW), or [DavidGF's SuperFW](https://github.com/davidgfnet/superfw) (SuperCard SD/Lite only), is installed before using Pico Launcher. They both add support for SDHC cards on the SuperCard SD/Lite, and they also provide the ability to autoboot into Pico Launcher.
