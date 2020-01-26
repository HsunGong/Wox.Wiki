This is a short installation guide that covers the whole installation process with all of Wox's dependencies. 

This page covers the following topics:
- [Where to download Wox?](https://github.com/Wox-launcher/Wox/wiki/Getting-started.-Installation#where-to-download-wox)
- [NET Framework](https://github.com/Wox-launcher/Wox/wiki/Getting-started.-Installation#net-framework)
- [Everything Search installation](https://github.com/Wox-launcher/Wox/wiki/Getting-started.-Installation#everything-search-installation)
- [Python installation (optional)](https://github.com/Wox-launcher/Wox/wiki/Getting-started.-Installation#python-installation-optional)
- [Wox installation](https://github.com/Wox-launcher/Wox/wiki/Getting-started.-Installation#python-installation-optional)

### Where to download Wox?
Start by navigating to Wox's [latest release page here on GitHub](https://github.com/Wox-launcher/Wox/releases/latest).
All files that you will need for a complete Wox installation are linked in the download section. The install order is the following: 

### NET Framework
If you are on Windows 10 you can skip this step.

Unless you are sure you have .NET Framework 4.5.2 installed, [download it here](https://www.microsoft.com/en-us/download/details.aspx?id=42643).

### Everything Search installation

Wox's file search functionality is powered by [Everything Search](https://www.voidtools.com/). You can skip this step if you already have it installed or if you do not want the file search functionality (we heavily recommend it though, it's awesome!)

To install Everything Search download the binary named `Everything-x.x.x....Setup.exe` from the releases page and install it. 
### Python installation (optional) 

While most plugins are written in C# Wox does support Python plugins. 
If you do not want to install Python right now this can be done later. 

To install Python download the binary named `Python-3.5.1.exe` from the releases page and install it. 

### Wox installation
Download the Wox installer. The link for it should look as follows `Wox-1.3.xxx.exe` (not the `Wox-1.3.xxx-full.nupkg`). Once downloaded, run it. 

You may receive a warning from Windows that the file is untrusted. This is because we do not code sign our binaries at the time of writing (11.11.2016) 

### Installation complete
If everything went well, you should see Wox's main window:

![postinstall](http://imgur.com/16atErC.jpg)

**[Back to the main Getting Started page](https://github.com/Wox-launcher/Wox/wiki)**