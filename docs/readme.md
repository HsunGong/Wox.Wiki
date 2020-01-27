## Wox Documentation

**This doc** contains all parts of Wox, including basic usage, settings and how to make a Wox plugin/theme.


### Quick Tutorial

> Jump to [Catalogue](#catalogue) to ignore unnecessary information. For **beginners**, read **Basic Usage** part carefully.


### Main Projects

- **Wox** (or Wox-Launcher) 
    - It is open sourced at: https://github.com/jjw24/Wox, any pull requests and issues are appreciate.

- **Wox.Wiki** (this doc)
  - It is open sourced at: https://github.com/HsunGong/Wox.Wiki.
  - If you want to help improve this doc or translate it to your native language, push requests or open issues.

##### Old projects

<place-holder>

## Introduction

Here we explain some intelligent ideas of `Wox`.

### What is Wox?

Wox is a launcher in `Windows`. We are trying to make `Wox` work like `Alfred`.

You can use to search local programs, files. It can also search web content by using plugins, such as how is the weather today, what's the score of xxx movie and so on.

### Why we develop Wox?

BUG: <place-holder>


### <a id="history">History</a>

#### Background

Before written Wox, I always wanted to write a launcher. I like to using hotkeys instead of keyboards, especially after using Vim. 
`Win + R` inside Windows cannot search programs, not good for me. I also used `Launchy`, but it seems stopped maintanence for a long time. 
Back to 2011, I tried to using C-lang to make some attempts, like [fstart](https://code.google.com/p/fstart/) and [smartrun](https://code.google.com/p/smartrun/). 
Maybe I'm a new guy to coding at that time, those attempts failed at the end. 
Probably in November 2013, I know `Alfred`, an awesome launcher in Mac. 
Unfortunately, there is no such thing under Windows :(

So, naturally, I came up an idea that making a launcher like Alfred, even the name initially was made as WinAlfred. I made a [post](http://v2ex.com/t/93922) on V2ex, which has some of the affirmative, later some people get involved in the project. In the middle of the developing Wox, I was warned by Alfred. Because the WinAlfred name contains Alfred, and cannot be used because that's their trademark. Finally, Wox come.

##### <p align="right">Author: [Bao Qian](#baoqian)</p>


### Supplements

If you don't know what `Alfred` is, search it on google.

The active fork is https://github.com/jjw24/Wox, just push your new ideas or open issues if you want.

The original repo is not archived, but far behind this fork.

Thank [Bao Qian](#baoqian) for his generous work. You can find more in [History Section](#history)

## <a id="catalogue">Catalogue</a>

- [Install Wox](basic/install.md)
- [**Gettings Started**](basic/usage.md): contains all basic usage of `Wox`, **this is what you should read as a beginner**.
  - [Start](basic/usage.md): a start guide
  - [Built-In Plugins Usage](basic/plugins.md): contains all built-in plugins usage and settings.
  - [Theme Usage](basic/themes.md): contains all theme-related usage and settings.
  - [Settings](basic/settings.md): contains all settings except `plugins` and `theme` of the main page.
- [Advanced Usage with plugins](plugins/main.md): more about plugins
- [Keep up to date](basic/update.md): The update method
- [Developer](basic/develop.md): redirect developers to what they want to modify.

<!-- Logic: Tutorial give all basic usage, and store at `basic` folder. Details (plugin, theme, refer) can be found in different folder. -->

## Version Check

Modifications:

- v1.0: This is the current version by maintainer [Xun Gong](#xungong), which is keeping on track.

- v0.0: The origin version. The creator [Bao Qian](#baoqian) is busy to update the doc and codes since 2019.



## References
<!-- 锚点：
必须全小写
空格用’-'代替
‘_’ '()'需要去掉
-->

If the doc is not written by the maintainer [Xun Gong](#xungong), the author will be pointed out.

- <a id="xungong">Xun Gong</a>: 
  - As the `maintainer`. 
  - Visit my [Github Page](https://github.com/hsungong), or [Email to me](mailto:gongxuncd@gmail.com).

- <a id="baoqian">Bao Qian</a>: [Github](https://github.com/bao-qian), and [Email](mailto:qianlf2008@163.com)