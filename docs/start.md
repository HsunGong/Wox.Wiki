# Quick Start with 2 easiest plugins

Wox is a plugin-based launcher, so what you learn to use `Wox` is actually learn to use some plugins.

Normally the input string should look like `A xxxxx`, where **A** is the Action keyword, and **xxxxx** is what you want to tell the plugin.

2 important **definitions** are: `action keyword`(or keyword, action word maybe) and `query`. Keep these TWO in mind.

The way to input query: Press `Alt+Space` and a `query box` appear, then you can 


### Calculator

Input: `1+1` (Press ++Alt+Space++ to open box)

- In this `1+1`, we use the plugin `Calculator` at default
    - It will return `2`
    - If then you press ++Enter++, `2` will copy to clipboard

Let's analyse.

- There is some plugins that do not use any **action keyword**, `Calculator` is one of them. We can change this later.
- The **query string** is `1+1`, which means you want to know the answer
- The author of `Calculator` calculates `1+1` and return `2` to you. There may be **more results** if the plugin changes or query varies.
- Meanwhile this plugin give you the ability to `Copy to clipboard`, if you press **Enter**.

### Cmd

Input: `> echo hello world`

- `>` is the keyword. `hello world` is the query string. Then it open a console ad print `hello world`.

TODO: Break here.

### Detail Usage of some plugins

Jump to [Built-In Plugins](plugins.md) to see introduction.

Jump to [Popular Plugins](plugins/popular.md) to see recommended plugins.

Jump to [Develop Plugins](plugins/develop.md) to develop a plugin.

## Themes

Themes can be modified.

!!! note "Develop a theme"
    Jump to [Usage with themes](themes.md) to see more.

## Settings

There are **6** parts of settings: General, Plugin, Theme, Hotkey, HTTP Proxy, About(Update). We will talk about all *except plugin*, because this can be found in [Built-In Plugins](plugins.md).

> The ways to call out `Wox Settings` are:
  (1) Query by `settings` and find `Wox` one.
  (2) click small icon in taskbar, and open settings.

Jump to [Settings]

## Update

### Plugin Update

### Wox Update