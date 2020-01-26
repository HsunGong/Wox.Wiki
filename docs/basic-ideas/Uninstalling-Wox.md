At the time of writing, there is no user friendly way of uninstalling Wox. 

This is something that will be eventually corrected, but in the meantime please follow this guide:

### 1. Acquire the uninstallation script

There are two ways you may acquire the uninstallation script. 

- [You may either download it by right-clicking here and choosing "Save File"](https://github.com/Wox-launcher/Wox/raw/dev/Scripts/wox_uninstaller.bat)

- or you may create that file yourself. You can do so by doing the following: 
  - click on the code block below
  - copy the code to the clipboard
  - paste it into notepad
  - save it as a new file with any name as long as it ends with `.bat`
<details><summary>Expand code block</summary>
<p>


```batch
@echo off
echo === Wox uninstallation utility ===
echo Now running Squirrel uninstaller
%LOCALAPPDATA%\Wox\Update.exe --uninstall .
echo Deleting Wox application files
rmdir %LOCALAPPDATA%\Wox /S /Q

echo Deleting Wox configuration files
rmdir %APPDATA%\Wox /S /Q

echo Wox uninstalled and residous folders deleted. 
pause
```

</p>
</details>


### 2. Run the uninstallation script

Double click on the .bat file that you now have to run the uninstaller. 

### 3. Done

At this point you have successfully uninstalled Wox from your system. 

### 4. What does the script do?

You may be interested as to what the script does, so here is a quick rundown. 

```
:: First we call the Squirrel updater with the uninstall flag and the directory where it resides
%LOCALAPPDATA%\Wox\Update.exe --uninstall . 

:: Once Squirrel has done its job, we delete Wox's application folder recursively
rmdir %LOCALAPPDATA%\Wox /S /Q

:: We also delete Wox's configuration folder recursively
rmdir %APPDATA%\Wox /S /Q
```