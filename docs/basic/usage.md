## Plugins

2 important **definitions** are: `action keyword`(or keyword, action word maybe) and `query`. Keep these TWO in mind.

The way to input query: Press `Alt+Space` and a `query box` appear, then you can 

### Plugin based Launcher

Wox is based on **plugins**. We regard each plugin as an individual program, and use some keywords to triger it.

- Normally the input string should look like `A xxxxx`, where **A** is the Action keyword, and **xxxxx** is what you want to tell the plugin.

System plugin generally does not require keywords (except Web Search plugin) and user can't uninstall those system plugins now, they all built-in plugins. User plugin requires a action keyword. For example, I want to use the youdao translator plugin, then you need to use the yd + space + words. The action keyword can be configured, and I will introduce how to use shortcuts to simplify this process in the following sections.

### Example

Take `1+1` for example.

- In this `1+1`, we use the plugin `Calculator` at default
    - It will return `2`
    - If press `Enter`, `2` will copy to clipboard

Let's analyse.

- There is some plugins that do not use any **action keyword**, `Calculator` is one of them. We can change this later.
- The **query string** is `1+1`, which means you want to know the answer
- The author of `Calculator` calculates `1+1` and return `2` to you. There may be **more results** if the plugin changes or query varies.
- Meanwhile this plugin give you the ability to `Copy to clipboard`, if you press **Enter**.

### Detail Usage of some plugins

Jump to [Built-In Plugins](plugins/system.md) to see introduction.

## Themes


Jump to [Usage with themes](themes.md) to see more.

## Settings

There are **6** parts of settings: General, Plugin, Theme, Hotkey, HTTP Proxy, About(Update). We will talk about all *except plugin*, because this can be found in [Built-In Plugins](plugins/system.md).

> The ways to call out `Wox Settings` are:
  (1) Query by `settings` and find `Wox` one.
  (2) click small icon in taskbar, and open settings.

Jump to [Settings]

## Advanced Usage

There are 2 parts, one is to explore more interesting plugins and themes, the other is to develop your own plugins.

- Jump to [Usage with themes](themes.md) to find more about themes.
- Jump to [Usage with Plugins](plugins/main.md) to find more about themes.
