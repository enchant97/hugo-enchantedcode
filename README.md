# Enchanted Code Hugo Theme
The official Enchanted Code Hugo theme. Designed to be uncluttered and optimised for modern web-browsers.

## Features
- Theme picker to switch between site themes
  - Dark-mode, Light-mode
- Feather Icons included (v4.29.0)
- Responsive design
- Built-in syntax highlighting

## Install

```
git submodule add --depth=1 https://github.com/enchant97/hugo-enchantedcode-theme.git themes/enchantedcode
```

## Configure

```yaml
theme: "enchantedcode"

paginate: 12

params:
  SiteIcon: "favicon.ico"
  RecentPostsCount: 6
  RelatedPostsCount: 6

menu:
  main:
    - Name: "Blog"
      URL: "/blog"
```
