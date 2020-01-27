# Python markdown Extensions

## Reference Web

https://facelessuser.github.io/pymdown-extensions/

## Usage

`!!!`:
!!! note Note is here.
!!! summary Summary is here.
!!! warning Warning is here.

`???`:
??? note `??? note` is here.
    Hide content

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
    - `@gitlab:xxx`, so as : twitter, gitlab, @User/repo(For github)
    - Github: Issue backrefs#1; Pull request !1; Commit ({provider}:{user}/{repo}@){hash}
  - pymdownx.smartsymbols: copyright and so.
  - pymdownx.tilde: ~~delete~~, Subscript
  - pymdownx.tasklist: todo list `[x] or []`