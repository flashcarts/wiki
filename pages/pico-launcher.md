---
title: Pico Launcher Builds
launcher_ver: v1.0.0
loader_ver: v1.0.1
downloads: [
    ["Ace3DS+", "pico_package_ACE3DS.zip"],
    ["Acekard 2", "pico_package_AK2.zip"],
    ["Acekard R.P.G.", "pico_package_AKRPG.zip"],
    ["DSpico", "pico_package_DSPICO.zip"],
    ["DSTT", "pico_package_DSTT.zip"],
    ["M3i Zero GMP-Z003", "pico_package_G003.zip"],
    ["Gateway Blue", "pico_package_GWBLUE.zip"],
    ["M3DS Real", "pico_package_M3DS.zip"],
    ["Original R4/M3 Simply", "pico_package_R4.zip"],
    ["R4DS Pro", "pico_package_R4DSPRO.zip"],
    ["R4iDSN", "pico_package_R4iDSN.zip"],
    ["SuperCard (Slot-2)", "pico_package_SUPERCARD.zip"]
]
---
On this page you will find builds of Pico Launcher, alongside it's loader, Pico Loader. 
These packages are specific to each flashcart family, so it is important that you choose the correct build.
{:.alert .alert-info}

Note that these builds are **unofficial** and in no way are affiliated with the LNH-team. 
If you spot an issue with the packages provided, please [open an issue here first](https://github.com/flashcarts/pico-builder).
{:.alert .alert-danger}

### Downloads

Each package below contains Pico Launcher {{ page.launcher_ver }} and Pico Loader {{ page.loader_ver }}.

{% for item in page.downloads %}
{% assign download_link = "https://picoarchive.cdn.blobfrii.com/" | append: item[1] %}
 - {{ item[0] }} - [{{ item[1] }}]({{ download_link }})
{% endfor %}
