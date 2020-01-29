shim_searchIndex = {"config":{"lang":["en"],"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"","text":"WOX: A wonderful launcher for Windows \u00b6 Wox is an effective and wonderful launcher for windows. A full-featured launcher, access programs and web contents as you type. Wox can do whatever you want via plugins. Wox is more productive ever since and free for use and open-sourced at Github. The target of Wox is Alfred on MACOS. Quick Start \u00b6 Jump to Install Wox , to install Wox . Jump to Quick Start , to use Wox . Jump to Develop , to help us develop Wox and Wox Wiki . Website \u00b6 This is the doc repo for jjw24/Wox , an awesome fork for original Wox . Github Page: https://hsungong.github.io/Wox.Wiki/ Readthedocs: https://woxwiki.readthedocs.io/en/latest/ Sources \u00b6 Doc repo: https://github.com/HsunGong/Wox.Wiki Wox Code repo: https://github.com/jjw24/Wox ReadtheDocs website: https://woxwiki.readthedocs.io/en/latest/ References \u00b6 Old Wox repo: https://github.com/Wox-launcher/Wox Old Wox Wiki: http://doc.wox.one/en/ and https://github.com/Wox-launcher/Wox/wiki Old Wox website: http://www.wox.one/ and http://doc.wox.one/en/ and https://github.com/Wox-launcher/Website License \u00b6 MIT License","title":"README"},{"location":"#wox_a_wonderful_launcher_for_windows","text":"Wox is an effective and wonderful launcher for windows. A full-featured launcher, access programs and web contents as you type. Wox can do whatever you want via plugins. Wox is more productive ever since and free for use and open-sourced at Github. The target of Wox is Alfred on MACOS.","title":"WOX: A wonderful launcher for Windows"},{"location":"#quick_start","text":"Jump to Install Wox , to install Wox . Jump to Quick Start , to use Wox . Jump to Develop , to help us develop Wox and Wox Wiki .","title":"Quick Start"},{"location":"#website","text":"This is the doc repo for jjw24/Wox , an awesome fork for original Wox . Github Page: https://hsungong.github.io/Wox.Wiki/ Readthedocs: https://woxwiki.readthedocs.io/en/latest/","title":"Website"},{"location":"#sources","text":"Doc repo: https://github.com/HsunGong/Wox.Wiki Wox Code repo: https://github.com/jjw24/Wox ReadtheDocs website: https://woxwiki.readthedocs.io/en/latest/","title":"Sources"},{"location":"#references","text":"Old Wox repo: https://github.com/Wox-launcher/Wox Old Wox Wiki: http://doc.wox.one/en/ and https://github.com/Wox-launcher/Wox/wiki Old Wox website: http://www.wox.one/ and http://doc.wox.one/en/ and https://github.com/Wox-launcher/Website","title":"References"},{"location":"#license","text":"MIT License","title":"License"},{"location":"changelog/","text":"Lastest Version Release Notes \u00b6 Wox Version \u00b6 Wiki Version \u00b6 v1.0 \u00b6 NEW : The formal version of wiki documentation. NOTE : This is the current version by maintainer Xun Gong , which is keeping on track. v0.0 \u00b6 NEW : The origin version. The creator Bao Qian is busy to update the doc and codes since 2019.","title":"Changelog"},{"location":"changelog/#lastest_version_release_notes","text":"","title":"Lastest Version Release Notes"},{"location":"changelog/#wox_version","text":"","title":"Wox Version"},{"location":"changelog/#wiki_version","text":"","title":"Wiki Version"},{"location":"changelog/#v10","text":"NEW : The formal version of wiki documentation. NOTE : This is the current version by maintainer Xun Gong , which is keeping on track.","title":"v1.0"},{"location":"changelog/#v00","text":"NEW : The origin version. The creator Bao Qian is busy to update the doc and codes since 2019.","title":"v0.0"},{"location":"develop/","text":"Develop a theme \u00b6 Develop a plugin \u00b6 Develop Wox \u00b6","title":"Develop"},{"location":"develop/#develop_a_theme","text":"","title":"Develop a theme"},{"location":"develop/#develop_a_plugin","text":"","title":"Develop a plugin"},{"location":"develop/#develop_wox","text":"","title":"Develop Wox"},{"location":"home/","text":"Wox Documentation \u00b6 This doc contains all intructions of Wox, including basic usage, settings and how to make a Wox plugin/theme. Quick Start Jump to Catalogue to ignore unnecessary information. For beginners , read Basic Usage part carefully. Examples Find Applications Find Built-In usages Terminal input Bookmark Introduction \u00b6 Here we explain some intelligent ideas of Wox . What is Wox? \u00b6 Wox is a launcher in Windows . We are trying to make Wox work like Alfred . You can use to search local programs, files. It can also search web content by using plugins, such as how is the weather today, what's the score of xxx movie and so on. Wox: A Plugin-based Launcher Wox is based on plugins . We regard each plugin as an individual program, and use some keywords to triger it. Normally the input string should look like A xxxxx , where A is the Action keyword, and xxxxx is what you want to tell the plugin. System plugin generally does not require keywords (except Web Search plugin) and user can't uninstall those system plugins now, they all built-in plugins. User plugin requires a action keyword. For example, I want to use the youdao translator plugin, then you need to use the yd + space + words. The action keyword can be configured, and I will introduce how to use shortcuts to simplify this process in the following sections. Wox is plugin-based , see more about explaination at intro of plugins . Why we develop Wox? \u00b6 History \u00b6 Before written Wox, I always wanted to write a launcher. I like to using hotkeys instead of keyboards, especially after using Vim. Win + R inside Windows cannot search programs, not good for me. I also used Launchy , but it seems stopped maintanence for a long time. Back to 2011, I tried to using C-lang to make some attempts, like fstart and smartrun . Maybe I'm a new guy to coding at that time, those attempts failed at the end. Probably in November 2013, I know Alfred , an awesome launcher in Mac. Unfortunately, there is no such thing under Windows :( So, naturally, I came up an idea that making a launcher like Alfred, even the name initially was made as WinAlfred. I made a post on V2ex, which has some of the affirmative, later some people get involved in the project. In the middle of the developing Wox, I was warned by Alfred. Because the WinAlfred name contains Alfred, and cannot be used because that's their trademark. Finally, Wox come. Author: Bao Qian \u00b6 Supplements \u00b6 If you don't know what Alfred is, search it on google. Active Fork The active fork is jjw24/Wox , just push your new ideas or open issues if you want. The original repo is not archived, but far behind this fork. Thank Bao Qian for his generous work. You can find more in History Section Catalogue \u00b6 Install Wox Getting Started : contains all basic usage of Wox , this is what you should read as a beginner . Quick Start : a start guide Basic Plugins Usage : contains all built-in plugins usage and settings. Theme Usage : contains all theme-related usage and settings. Settings : contains all settings except plugins and theme of the main page. Advanced Usage with plugins : more about plugins, install, usage and develop. Keep up to date : The update method Developer : redirect developers to what they want to modify. Projects \u00b6 This is the expansion of Source Wox.Wiki (this doc) This doc is open sourced at: hsungong/Wox.Wiki If you want to help improve this doc or translate it to your native language, open issues at hsungong/Wox.Wiki /issues or email to me with email Wox (or Wox-Launcher) It is now open sourced at jjw24/Wox , any pull requests and issues are appreciate. The original location can be found at Other projects \u00b6 References \u00b6 If the doc is not written by the maintainer Xun Gong , the author will be pointed out. Xun Gong : As the maintainer Visit my Github Page , or Email to me . Bao Qian : The creator. Github , and Email","title":"Home"},{"location":"home/#wox_documentation","text":"This doc contains all intructions of Wox, including basic usage, settings and how to make a Wox plugin/theme. Quick Start Jump to Catalogue to ignore unnecessary information. For beginners , read Basic Usage part carefully. Examples Find Applications Find Built-In usages Terminal input Bookmark","title":"Wox Documentation"},{"location":"home/#introduction","text":"Here we explain some intelligent ideas of Wox .","title":"Introduction"},{"location":"home/#what_is_wox","text":"Wox is a launcher in Windows . We are trying to make Wox work like Alfred . You can use to search local programs, files. It can also search web content by using plugins, such as how is the weather today, what's the score of xxx movie and so on. Wox: A Plugin-based Launcher Wox is based on plugins . We regard each plugin as an individual program, and use some keywords to triger it. Normally the input string should look like A xxxxx , where A is the Action keyword, and xxxxx is what you want to tell the plugin. System plugin generally does not require keywords (except Web Search plugin) and user can't uninstall those system plugins now, they all built-in plugins. User plugin requires a action keyword. For example, I want to use the youdao translator plugin, then you need to use the yd + space + words. The action keyword can be configured, and I will introduce how to use shortcuts to simplify this process in the following sections. Wox is plugin-based , see more about explaination at intro of plugins .","title":"What is Wox?"},{"location":"home/#why_we_develop_wox","text":"","title":"Why we develop Wox?"},{"location":"home/#history","text":"Before written Wox, I always wanted to write a launcher. I like to using hotkeys instead of keyboards, especially after using Vim. Win + R inside Windows cannot search programs, not good for me. I also used Launchy , but it seems stopped maintanence for a long time. Back to 2011, I tried to using C-lang to make some attempts, like fstart and smartrun . Maybe I'm a new guy to coding at that time, those attempts failed at the end. Probably in November 2013, I know Alfred , an awesome launcher in Mac. Unfortunately, there is no such thing under Windows :( So, naturally, I came up an idea that making a launcher like Alfred, even the name initially was made as WinAlfred. I made a post on V2ex, which has some of the affirmative, later some people get involved in the project. In the middle of the developing Wox, I was warned by Alfred. Because the WinAlfred name contains Alfred, and cannot be used because that's their trademark. Finally, Wox come.","title":"History"},{"location":"home/#author_bao_qian","text":"","title":"Author: Bao Qian"},{"location":"home/#supplements","text":"If you don't know what Alfred is, search it on google. Active Fork The active fork is jjw24/Wox , just push your new ideas or open issues if you want. The original repo is not archived, but far behind this fork. Thank Bao Qian for his generous work. You can find more in History Section","title":"Supplements"},{"location":"home/#catalogue","text":"Install Wox Getting Started : contains all basic usage of Wox , this is what you should read as a beginner . Quick Start : a start guide Basic Plugins Usage : contains all built-in plugins usage and settings. Theme Usage : contains all theme-related usage and settings. Settings : contains all settings except plugins and theme of the main page. Advanced Usage with plugins : more about plugins, install, usage and develop. Keep up to date : The update method Developer : redirect developers to what they want to modify.","title":"Catalogue"},{"location":"home/#projects","text":"This is the expansion of Source Wox.Wiki (this doc) This doc is open sourced at: hsungong/Wox.Wiki If you want to help improve this doc or translate it to your native language, open issues at hsungong/Wox.Wiki /issues or email to me with email Wox (or Wox-Launcher) It is now open sourced at jjw24/Wox , any pull requests and issues are appreciate. The original location can be found at","title":"Projects"},{"location":"home/#other_projects","text":"","title":"Other projects"},{"location":"home/#references","text":"If the doc is not written by the maintainer Xun Gong , the author will be pointed out. Xun Gong : As the maintainer Visit my Github Page , or Email to me . Bao Qian : The creator. Github , and Email","title":"References"},{"location":"install/","text":"Install and Uninstall Wox \u00b6 This doc will give you options to download Wox. The package is a fork( JJW24 ) of the origin Wox( version: v1.3.524 ). Download link: https://github.com/jjw24/Wox/releases Open this link, and find the lastest version you need. Target After the instruction, you can use Alt + Space to open WOX . Preparation \u00b6 If you want use python -based program, install Python3 before you install Wox. So as nodejs . Portable Wox \u00b6 This is a nice version of Wox. However, portable version is updated slow. Benefits: you can store all data in your own defined folder. keep clean from your device. available on any device if you have a portable disk. Package Keywords: Portable.zip Unzip this compressed file, and open Wox.exe . Uninstall \u00b6 Delete Wox folder. Install Wox in User folder \u00b6 This is the original version of Wox. It is faster than Portable Wox , and stable. Package Keywords: .exe Just open this executable file, all data will be loaded. this file may be warned as Windows Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk. , just ignore it. Uninstall \u00b6 Delete %APPDATA%/Wox and %LOCALAPPDATA%/Wox . Build from Source \u00b6 This is the latest version of Wox. It is unstable, and only for developers. Package Keywords: git Git Repo: https://github.com/jjw24/Wox Build: See https://www.google.com/search?&q=create+exe+file+from+C%23&oq=create+exe+file+from+C%23","title":"Install Wox"},{"location":"install/#install_and_uninstall_wox","text":"This doc will give you options to download Wox. The package is a fork( JJW24 ) of the origin Wox( version: v1.3.524 ). Download link: https://github.com/jjw24/Wox/releases Open this link, and find the lastest version you need. Target After the instruction, you can use Alt + Space to open WOX .","title":"Install and Uninstall Wox"},{"location":"install/#preparation","text":"If you want use python -based program, install Python3 before you install Wox. So as nodejs .","title":"Preparation"},{"location":"install/#portable_wox","text":"This is a nice version of Wox. However, portable version is updated slow. Benefits: you can store all data in your own defined folder. keep clean from your device. available on any device if you have a portable disk. Package Keywords: Portable.zip Unzip this compressed file, and open Wox.exe .","title":"Portable Wox"},{"location":"install/#uninstall","text":"Delete Wox folder.","title":"Uninstall"},{"location":"install/#install_wox_in_user_folder","text":"This is the original version of Wox. It is faster than Portable Wox , and stable. Package Keywords: .exe Just open this executable file, all data will be loaded. this file may be warned as Windows Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk. , just ignore it.","title":"Install Wox in User folder"},{"location":"install/#uninstall_1","text":"Delete %APPDATA%/Wox and %LOCALAPPDATA%/Wox .","title":"Uninstall"},{"location":"install/#build_from_source","text":"This is the latest version of Wox. It is unstable, and only for developers. Package Keywords: git Git Repo: https://github.com/jjw24/Wox Build: See https://www.google.com/search?&q=create+exe+file+from+C%23&oq=create+exe+file+from+C%23","title":"Build from Source"},{"location":"license/","text":"Wox.Wiki \u00b6 Wox \u00b6","title":"License"},{"location":"license/#woxwiki","text":"","title":"Wox.Wiki"},{"location":"license/#wox","text":"","title":"Wox"},{"location":"plugins/","text":"Usage \u00b6","title":"Built-In"},{"location":"plugins/#usage","text":"","title":"Usage"},{"location":"settings/","text":"Wox Settings \u00b6 General \u00b6 Start Wox on system startup : Tick it if you want. Hide Wox on startup : If tick, after start Wox program, the query box will hide at first. If you want to open query box , press Alt+Space Hide Wox when focus is lost : This means if you don't use Wox, the query box will hide. Default: Tick Hide tray icon : This will change Windows Settings -> Taskbar -> Select which icons appear on the taskbar . If tick, Wox icon will disappear in taskbar(you can not found). (Which means the only way to open settings is (1)) Remeber last launch location : BUG: Not clear yet Iqnore hotkey in fullscreen mode : This will ignore hotkey if you enter the fullscreen mode. BUG: This doesn't seem to work Auto Update : BUG: This doesn't seem to work. Should Use Pinyin : This is special for Chinese Query . For example, yd will respond to \u6709\u9053 or youdao . Query Search Precision : BUG: Not clear yet Last Query Style : BUG: Not clear yet Language : Language support has : English, \u4e2d\u6587, \u4e2d\u6587\uff08\u7e41\u4f53\uff09, \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430, \u0420\u0443\u0441\u0441\u043a\u0438\u0439, Fran\u00e7ais, \u65e5\u672c\u8a9e, Dutch, Polski, Dansk, Deutsch, \ud55c\uad6d\uc5b4, Srpski, Portugu\u00eas (Brasil), Italiano, Norsk Bokm\u00e5l, Slovensk\u00fd. Maximum results shown : The max number of results(each result occupy one line) shows each time. If you want to see more, scroll it . Python Directory : The path to python.exe . If you have already set the environment variable PATH , there is no need to set it. Else, set path here. Theme \u00b6 Wox supports themes. You can choose your favorite theme or design your own theme. Browse themes \u00b6 Default: Dark, Recommend: BlackAndWhite or BlurBlack Browse on web: In addition, we also offer an online theme maker ThemeBuilder. Once theme is configured on the Web site, click on download, and rename it as following format: .xaml. You can then put this theme file in Theme directory in the root of Wox directory and restart the Wox. After restart Wox, user can see new theme in the theme list. Fonts \u00b6 Hotkey \u00b6 HTTP Proxy \u00b6 About \u00b6","title":"Settings"},{"location":"settings/#wox_settings","text":"","title":"Wox Settings"},{"location":"settings/#general","text":"Start Wox on system startup : Tick it if you want. Hide Wox on startup : If tick, after start Wox program, the query box will hide at first. If you want to open query box , press Alt+Space Hide Wox when focus is lost : This means if you don't use Wox, the query box will hide. Default: Tick Hide tray icon : This will change Windows Settings -> Taskbar -> Select which icons appear on the taskbar . If tick, Wox icon will disappear in taskbar(you can not found). (Which means the only way to open settings is (1)) Remeber last launch location : BUG: Not clear yet Iqnore hotkey in fullscreen mode : This will ignore hotkey if you enter the fullscreen mode. BUG: This doesn't seem to work Auto Update : BUG: This doesn't seem to work. Should Use Pinyin : This is special for Chinese Query . For example, yd will respond to \u6709\u9053 or youdao . Query Search Precision : BUG: Not clear yet Last Query Style : BUG: Not clear yet Language : Language support has : English, \u4e2d\u6587, \u4e2d\u6587\uff08\u7e41\u4f53\uff09, \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430, \u0420\u0443\u0441\u0441\u043a\u0438\u0439, Fran\u00e7ais, \u65e5\u672c\u8a9e, Dutch, Polski, Dansk, Deutsch, \ud55c\uad6d\uc5b4, Srpski, Portugu\u00eas (Brasil), Italiano, Norsk Bokm\u00e5l, Slovensk\u00fd. Maximum results shown : The max number of results(each result occupy one line) shows each time. If you want to see more, scroll it . Python Directory : The path to python.exe . If you have already set the environment variable PATH , there is no need to set it. Else, set path here.","title":"General"},{"location":"settings/#theme","text":"Wox supports themes. You can choose your favorite theme or design your own theme.","title":"Theme"},{"location":"settings/#browse_themes","text":"Default: Dark, Recommend: BlackAndWhite or BlurBlack Browse on web: In addition, we also offer an online theme maker ThemeBuilder. Once theme is configured on the Web site, click on download, and rename it as following format: .xaml. You can then put this theme file in Theme directory in the root of Wox directory and restart the Wox. After restart Wox, user can see new theme in the theme list.","title":"Browse themes"},{"location":"settings/#fonts","text":"","title":"Fonts"},{"location":"settings/#hotkey","text":"","title":"Hotkey"},{"location":"settings/#http_proxy","text":"","title":"HTTP Proxy"},{"location":"settings/#about","text":"","title":"About"},{"location":"start/","text":"Quick Start with 2 easiest plugins \u00b6 Wox is a plugin-based launcher, so what you learn to use Wox is actually learn to use some plugins. Normally the input string should look like A xxxxx , where A is the Action keyword, and xxxxx is what you want to tell the plugin. 2 important definitions are: action keyword (or keyword, action word maybe) and query . Keep these TWO in mind. The way to input query: Press Alt+Space and a query box appear, then you can Calculator \u00b6 Input: 1+1 (Press ++Alt+Space++ to open box) In this 1+1 , we use the plugin Calculator at default It will return 2 If then you press ++Enter++, 2 will copy to clipboard Let's analyse. There is some plugins that do not use any action keyword , Calculator is one of them. We can change this later. The query string is 1+1 , which means you want to know the answer The author of Calculator calculates 1+1 and return 2 to you. There may be more results if the plugin changes or query varies. Meanwhile this plugin give you the ability to Copy to clipboard , if you press Enter . Cmd \u00b6 Input: > echo hello world > is the keyword. hello world is the query string. Then it open a console ad print hello world . TODO: Break here. Detail Usage of some plugins \u00b6 Jump to Built-In Plugins to see introduction. Jump to Popular Plugins to see recommended plugins. Jump to Develop Plugins to develop a plugin. Themes \u00b6 Themes can be modified. Develop a theme Jump to Usage with themes to see more. Settings \u00b6 There are 6 parts of settings: General, Plugin, Theme, Hotkey, HTTP Proxy, About(Update). We will talk about all except plugin , because this can be found in Built-In Plugins . The ways to call out Wox Settings are: (1) Query by settings and find Wox one. (2) click small icon in taskbar, and open settings. Jump to [Settings] Update \u00b6 TODO: C:\\Users\\xun\\AppData\\Local\\Wox\\Wox\\app-1.2.0\\Themes\\ThemeBuilder\\ThemeConvertor.py C:\\Users\\xun\\AppData\\Local\\Wox\\Wox\\app-1.2.0\\Themes\\ThemeBuilder\\Template.xaml Plugin Update \u00b6 Wox Update \u00b6","title":"Getting started"},{"location":"start/#quick_start_with_2_easiest_plugins","text":"Wox is a plugin-based launcher, so what you learn to use Wox is actually learn to use some plugins. Normally the input string should look like A xxxxx , where A is the Action keyword, and xxxxx is what you want to tell the plugin. 2 important definitions are: action keyword (or keyword, action word maybe) and query . Keep these TWO in mind. The way to input query: Press Alt+Space and a query box appear, then you can","title":"Quick Start with 2 easiest plugins"},{"location":"start/#calculator","text":"Input: 1+1 (Press ++Alt+Space++ to open box) In this 1+1 , we use the plugin Calculator at default It will return 2 If then you press ++Enter++, 2 will copy to clipboard Let's analyse. There is some plugins that do not use any action keyword , Calculator is one of them. We can change this later. The query string is 1+1 , which means you want to know the answer The author of Calculator calculates 1+1 and return 2 to you. There may be more results if the plugin changes or query varies. Meanwhile this plugin give you the ability to Copy to clipboard , if you press Enter .","title":"Calculator"},{"location":"start/#cmd","text":"Input: > echo hello world > is the keyword. hello world is the query string. Then it open a console ad print hello world . TODO: Break here.","title":"Cmd"},{"location":"start/#detail_usage_of_some_plugins","text":"Jump to Built-In Plugins to see introduction. Jump to Popular Plugins to see recommended plugins. Jump to Develop Plugins to develop a plugin.","title":"Detail Usage of some plugins"},{"location":"start/#themes","text":"Themes can be modified. Develop a theme Jump to Usage with themes to see more.","title":"Themes"},{"location":"start/#settings","text":"There are 6 parts of settings: General, Plugin, Theme, Hotkey, HTTP Proxy, About(Update). We will talk about all except plugin , because this can be found in Built-In Plugins . The ways to call out Wox Settings are: (1) Query by settings and find Wox one. (2) click small icon in taskbar, and open settings. Jump to [Settings]","title":"Settings"},{"location":"start/#update","text":"TODO: C:\\Users\\xun\\AppData\\Local\\Wox\\Wox\\app-1.2.0\\Themes\\ThemeBuilder\\ThemeConvertor.py C:\\Users\\xun\\AppData\\Local\\Wox\\Wox\\app-1.2.0\\Themes\\ThemeBuilder\\Template.xaml","title":"Update"},{"location":"start/#plugin_update","text":"","title":"Plugin Update"},{"location":"start/#wox_update","text":"","title":"Wox Update"},{"location":"themes/","text":"Usage \u00b6 Settings \u00b6 Import from Afred \u00b6 Design your own theme \u00b6","title":"Themes"},{"location":"themes/#usage","text":"","title":"Usage"},{"location":"themes/#settings","text":"","title":"Settings"},{"location":"themes/#import_from_afred","text":"","title":"Import from Afred"},{"location":"themes/#design_your_own_theme","text":"","title":"Design your own theme"},{"location":"plugins/develop/","text":"","title":"Develop"},{"location":"plugins/popular/","text":"","title":"Poplular"},{"location":"refer/mkdocs/","text":"Welcome to MkDocs \u00b6 For full documentation visit mkdocs.org . Commands \u00b6 mkdocs new [dir-name] - Create a new project. mkdocs serve - Start the live-reloading docs server. mkdocs build - Build the documentation site. mkdocs help - Print this help message. Project layout \u00b6 mkdocs.yml # The configuration file. docs/ index.md # The documentation homepage. ... # Other markdown pages, images and other files.","title":"Mkdocs"},{"location":"refer/mkdocs/#welcome_to_mkdocs","text":"For full documentation visit mkdocs.org .","title":"Welcome to MkDocs"},{"location":"refer/mkdocs/#commands","text":"mkdocs new [dir-name] - Create a new project. mkdocs serve - Start the live-reloading docs server. mkdocs build - Build the documentation site. mkdocs help - Print this help message.","title":"Commands"},{"location":"refer/mkdocs/#project_layout","text":"mkdocs.yml # The configuration file. docs/ index.md # The documentation homepage. ... # Other markdown pages, images and other files.","title":"Project layout"},{"location":"refer/pymdown/","text":"Extensions for mkdocs \u00b6 Mkdocs, Python markdown-extensions, Material theme for mkdocs Reference Web \u00b6 https://facelessuser.github.io/pymdown-extensions/ https://squidfunk.github.io/mkdocs-material/ https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/ https://www.mkdocs.org/ Used extensions \u00b6 pymdownx.details: Fold details with ??? special links are: note, success, warning, danger optional-class, multiple ???+ to set default as unfold . Code Highlight: pymdownx.inlinehilite: rich-format for ` , add #! + js/math/Bash/c++/C/C#/py3 at top. pymdownx.superfences: Rich-format for ``` paragraph. Better format: pymdownx.mark: A tool to add highlight color . For example mark me pymdownx.betterem: Fix * and _ . pymdownx.caret: Underline, superscript pymdownx.emoji: See more at https://github.com/JoyPixels/emoji-toolkit pymdownx.magiclink: @gitle backrefs#1; Pull request !1; Commit ({provider}:ab:xxx , so as : twitter, gitlab, User/repo (For github) Github: Issu{user}/{repo}@){hash} pymdownx.smartsymbols: copyright and so. pymdownx.tilde: delete , Subscript pymdownx.tasklist: todo list [x] or [] pymdownx.keys: ++ctrl+alt+delete++ Ctrl + Alt + Del Admonition \u00b6 https://squidfunk.github.io/mkdocs-material/extensions/admonition/ Example: symbol + \"title\" + New Line for content Note here Note example Symbols: !!! : a rich format box ???: a rich format box for folding box. default is fold. ???+ : default is unfold Preserve words: note, seealso abstract, summary, tldr info, todo tip, hint, important success, check, done question, help, faq warning, caution, attention failure, fail, missing danger, error, bug example, snippet quote, cite","title":"Python Markdown Extensions"},{"location":"refer/pymdown/#extensions_for_mkdocs","text":"Mkdocs, Python markdown-extensions, Material theme for mkdocs","title":"Extensions for mkdocs"},{"location":"refer/pymdown/#reference_web","text":"https://facelessuser.github.io/pymdown-extensions/ https://squidfunk.github.io/mkdocs-material/ https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/ https://www.mkdocs.org/","title":"Reference Web"},{"location":"refer/pymdown/#used_extensions","text":"pymdownx.details: Fold details with ??? special links are: note, success, warning, danger optional-class, multiple ???+ to set default as unfold . Code Highlight: pymdownx.inlinehilite: rich-format for ` , add #! + js/math/Bash/c++/C/C#/py3 at top. pymdownx.superfences: Rich-format for ``` paragraph. Better format: pymdownx.mark: A tool to add highlight color . For example mark me pymdownx.betterem: Fix * and _ . pymdownx.caret: Underline, superscript pymdownx.emoji: See more at https://github.com/JoyPixels/emoji-toolkit pymdownx.magiclink: @gitle backrefs#1; Pull request !1; Commit ({provider}:ab:xxx , so as : twitter, gitlab, User/repo (For github) Github: Issu{user}/{repo}@){hash} pymdownx.smartsymbols: copyright and so. pymdownx.tilde: delete , Subscript pymdownx.tasklist: todo list [x] or [] pymdownx.keys: ++ctrl+alt+delete++ Ctrl + Alt + Del","title":"Used extensions"},{"location":"refer/pymdown/#admonition","text":"https://squidfunk.github.io/mkdocs-material/extensions/admonition/ Example: symbol + \"title\" + New Line for content Note here Note example Symbols: !!! : a rich format box ???: a rich format box for folding box. default is fold. ???+ : default is unfold Preserve words: note, seealso abstract, summary, tldr info, todo tip, hint, important success, check, done question, help, faq warning, caution, attention failure, fail, missing danger, error, bug example, snippet quote, cite","title":"Admonition"}]}; fetch_native=fetch,fetch=function(e,n){return-1!==e.indexOf("search_index.json")?new Promise(function(e,n){e({json:function(){return shim_searchIndex}})}):fetch_native(e,n)};