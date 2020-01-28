# Extensions for mkdocs

Mkdocs, Python markdown-extensions, Material theme for mkdocs

## Reference Web

https://facelessuser.github.io/pymdown-extensions/

https://squidfunk.github.io/mkdocs-material/

https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/  

https://www.mkdocs.org/

## Used extensions

- pymdownx.details: Fold details with `???`
    - special links are: `note, success, warning, danger` 
    - `optional-class, multiple`
    - `???+` to set default as `unfold`.
- Code Highlight:
    - pymdownx.inlinehilite: rich-format for ==\`==, add `#!` + `js/math/Bash/c++/C/C#/py3` at top.
    - pymdownx.superfences: Rich-format for ==```== paragraph.
- Better format:
    - pymdownx.mark: A tool to add `highlight color`. For example ==mark me==
    - pymdownx.betterem: Fix `*` and `_`.
    - pymdownx.caret: Underline, superscript
    <!-- - pymdownx.critic: Ignore -->
    - pymdownx.emoji: :smile: :heart: :thumbsup: See more at https://github.com/JoyPixels/emoji-toolkit
    - pymdownx.magiclink:
        - `@gitle backrefs#1; Pull request !1; Commit ({provider}:ab:xxx`, so as : twitter, gitlab, @User/repo(For github)
        - Github: Issu{user}/{repo}@){hash}
    - pymdownx.smartsymbols: copyright and so.
    - pymdownx.tilde: ~~delete~~, Subscript
    - pymdownx.tasklist: todo list `[x] or []`
- pymdownx.keys: `++ctrl+alt+delete++` ++ctrl+alt+delete++


## Admonition

https://squidfunk.github.io/mkdocs-material/extensions/admonition/

- Example:
    - `symbol` + `"title"` + `New Line for content`
    - !!! note "Note here"
        Note example

- Symbols:
    - !!! : a rich format box
    - ???: a rich format box for folding box. default is fold.
    - ???+ : default is unfold
  
- Preserve words:
    - note, seealso
    - abstract, summary, tldr
    - info, todo
    - tip, hint, important
    - success, check, done
    - question, help, faq
    - warning, caution, attention
    - failure, fail, missing
    - danger, error, bug
    - example, snippet
    - quote, cite

