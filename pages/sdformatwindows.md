---
title: sdFormatWindows
description: Open-source mostly-compliant SD card formatter
permalink: /sdformatwindows.html
---

sdFormatWindows (a fork of profi200's [sdFormatLinux](https://github.com/profi200/sdFormatLinux)) is an open-source SD card formatter for Microsoft Windows.

## Features

* Formatting of SD cards as closely as possible to the [official format tool](https://www.sdcard.org/downloads/formatter/)
* Ability to format SDXC cards to FAT32, removing the need for secondary format utilities

## License

sdFormatWindows (and sdFormatLinux) is licensed under the [MIT license](https://github.com/flashcarts/sdFormatWindows/blob/windows/LICENSE.txt). By using sdFormatWindows, you agree to the terms of this license.

## Download

[Download sdFormatWindows](https://github.com/flashcarts/sdFormatWindows/releases/latest/download/sdFormatWindows.exe)

[View source code](https://github.com/flashcarts/sdFormatWindows)

## Usage guide

Using this application will ERASE ALL DATA on your SD card, or any other storage device that is selected. Use with caution. Back up ALL of your data before proceeding.
{:.alert .alert-danger}

1. Insert your SD card into your computer
1. Launch sdFormatWindows
1. Select your SD card drive letter in the dropdown menu
1. If your SD card is 64GB or larger, select the following options based on your use case:
    - **Nintendo DSi users with Unlaunch installed** or **DS flashcart users**:
        - Enable "Format as FAT32"
        - Then, enable "Force 32KiB cluster size"
    - **Other Nintendo console users**:
        - Enable "Format as FAT32"
    - If none of the above apply, leave all settings as default
1. Click "Format"
1. Read the warning popup. MULTIPLE TIMES. And click "Yes" if you have acknowledged the warning to start the format
1. Wait for the format to complete
1. Once you see the message "Format successful.", click "OK"
1. Your SD card is now ready to use

{% include_relative include/disclaimer.md %}
