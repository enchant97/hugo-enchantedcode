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
git submodule add --depth=1 https://github.com/enchant97/hugo-enchantedcode.git themes/enchantedcode
```

## Configure
This theme exposes some extra configuration options.

```yaml
theme: "enchantedcode"

# How many posts to show per page
paginate: 12

params:
  # Where the site favicon can be found
  SiteIcon: "favicon.ico"
  # Show many recent posts to show on homepage
  RecentPostsCount: 6
  # How many related posts to show at bottom of post
  RelatedPostsCount: 6
  # whether to include the whole post content or just a summary
  RssShowContent: false
  # show/hide the "powered by" notice in the footer
  ShowPoweredBy: true

  # Optional welcome panel on homepage
  WelcomePanel:
    Icon: "icon.png"
    Title: "Welcome To ..."
    Description: "This is my Amazing Site!"

menu:
  # main menu shown at top of every page
  main:
    - Name: "Blog"
      URL: "/blog"
```

## Front Matter
This theme exposes some extra config options that can be set in a posts front matter.

```yaml
# Where to look for the posts featured image, if not set will look for: featured*
featuredImage: "post-image.png"
```
