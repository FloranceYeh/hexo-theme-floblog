# HEXO theme Floblog

[readme_zh](readme_zh.md)

Floblog is a HEXO theme that allows user to highly customized.

## 1. Usage

### 1.1 Install Floblog

**in root directory**

```bash
cd theme
git clone git@github.com:FloranceYeh/hexo-theme-floblog.git Floblog
```

### 2.2 Set theme Floblog in the `_config.yml` of HEXO root directory

```yml
theme: Floblog
```

### 3.3 enable highlight.js 

```yml
syntax_highlighter: highlight.js
highlight:
  line_number: true # alternative
  auto_detect: false
  tab_replace: '    '
  wrap: true
  hljs: true # must be true
```

## 2. Configuration

Floblog offers many functions for user to customized it.

### 2.1 Basic Configuration

#### 2.1.1 Images

```yml
icon: /images/avatar.jpg # icon in web page tab
avatar: /images/avatar.jpg # display in sidebar or card
background: /images/background_s.jpg # bakcground image of main page
```

#### 2.1.2 Theme color

Use H value in HSL for you theme color.

Then the Floblog will generate secondary color for you.

```yml
theme_color: 150 # HSL(H, 65%, 45%)
# blue: 200
# red: 6
# green: 134
# orange: 28
# purple: 280
# pink: 330
```

#### 2.1.3 Tags color

When every time tags needs to be shown, it'll randomly choose one color in the list.

You can use any color code that CSS can parse.

```yml
tags_colors:
  - "#ffa2c4"
  - "#00bcd4"
  - "#03a9f4"
  - "#00a596"
  - "#ff7d73"
```

### 2.2 Post Configuration

#### 2.2.1 Post width 

You can add `width:x`*(1<= x <= 5, default 5)* to the Front-matter to define the width of a post.

This allows users to customize the arrangement of posts on their homepage.

While rendering the index page, the post will be arranged according to the width.

```md
---
title: Hello World
date: 2025-10-28 19:20:24
tags: 
    - H
    - E
categories: Hello
width: 5
---
```

#### 2.2.2 TOC(Table Of Contents)

You can add `toc:true | false` to the Front-matter to decide whether to enable the TOC.

TOC will automatically number headings of different levels, so it is **not recommended** that you number the headings yourself when writing an article.

The TOC sidebar also contains ToTheTop button and ToTheButtom button(switch to ToTheComments button when comment is enable)

```md
---
title: Hello World
date: 2025-10-28 19:20:24
tags: 
    - H
    - E
categories: Hello
width: 5
toc: true
---
```

You can also customize the text of TOC in `theme/_config.yml`.

```yml
toc:
  enable: true
  title: TOC
  ToTheTop_text: top
  ToTheBottom_text: Buttom
  ToTheComments_text: Comments
```

#### 2.2.3 Comments

You can add `comments:true | false` to the Front-matter to decide whether to enable the comments.

```md
---
title: Hello World
date: 2025-10-28 19:20:24
tags: 
    - H
    - E
categories: Hello
width: 5
toc: true
comments: true
---
```

### 2.3 Memu Configuration

You can freely customize the position and alignment of the menu.
Items are extendable; you can add other pages, but don't overdo it.


When the screen pixels are less than 900px, it will automatically switch to a dropdown menu.

It is **not recommended** to close the menu, otherwise mobile users will not be able to navigate to other pages.


```yml
menu: # icon class reference: https://fontawesome.com/icons
  enable: true # not suggest to disable it :)
  position: top # left, top, right
  align: center # start, center, end
  auto_hide: true # not work when menu at left or right
  items:
    Home:
      link: /
      icon: fa-solid fa-house
    About:
      link: /about/
      icon: fa-solid fa-user
    Archives:
      link: /archives/
      icon: fa-solid fa-archive
    Categories: 
      link: /categories/
      icon: fa-solid fa-folder
    Tags:
      link: /tags/
      icon: fa-solid fa-tags
    Links:
      link: /links/
      icon: fa-solid fa-link
```

### 2.4 Posts Configuration

Posts in home page.

You can customized its contents and position of read_more button.

If read_more button is disabled, user can still turn to the post by click the post title.

Posts width should be defined in the Font-matter of the post. 

```yml
post:
  show_date: true
  show_category: true
  show_tags: true
  read_more:
    enable: true
    position: right # left, bottom, right
    text: "READ MORE"
```

### 2.5 Links Configuration

Create`source/_data/links.yml`file to use it.

It's extendable.

The `links.yml` should like this.

```yml
Friends:
  LinkName1:
    name: 
    url: 
    ava: 
    des: 
  LinkName2:
    name: 
    url: 
    ava: 
    des: 

Tools:
  LinkName3:
    name: 
    url: 
    ava: 
    des: 
```


### 2.6 Card Configuration

Cards contain some informations and fuctions.

Dark mode is included in the theme controler card.

> More components to be developed...
> - [x] Main card
> - [x] Theme controler card
> - [ ] Calendar card
> - [ ] Tag cloud card
> - [ ] Recommended post card

```yml
cards:
  enable: true
  position: right # left, right
  description: | 
    Welcome to my blog!
  iconlinks: # Extendable
    github:
      link: https://github.com/
      icon: fa-brands fa-github
    twitter:
      link: https://twitter.com/
      icon: fa-brands fa-twitter
    facebook:
      link: https://facebook.com/
      icon: fa-brands fa-facebook
  links: # Extendable
    Home: /
    About: /about/
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
    Links: /links/
#   calendar: 
#     enable: true
  theme_controler:
    enable: true    # enable theme settings card
    slider: true
    presets: # HSL(H, 60%, 45%), Extendable
      blue: 200
      red: 6
      green: 134
      orange: 28
      purple: 280
      pink: 330
```

### 2.7 Other Configuration

#### 2.7.1 Loading

```yml
loading: 
  enable: true 
  title: LOADING
  content: The website is loading, please wait a second.
```

#### 2.7.2 Highlight

To enable it, please ensure configurations in `3.3` was set correctly .

Automatically fold when the code block exceeds `max_height`

```yml
highlight:
  enable: true
  style: github-dark # See available styles at highlight.js
  max_height: 500 # px
```

#### 2.7.3 Search

Search bar in archives page.

Only can search the title of posts.

```yml
search:
  enable: true
  position: right # left, top, right
  placeholder: "Search..."
```

### 2.8 Footer Configuration

```yml
footer:
  enable: true
  since: 2025
  # Customize the server domain name ICP
  ICP:
      enable: false
      code:
      link:
```

### 2.9 Comments Configuration

> This feature has not been tested yet, so please let me know if you encounter any issues.

```yml
comments:
  enable: false
  # giscus
  # https://github.com/giscus/giscus
  giscus:
      enable: false
      repo:
      repoID:
      category:
      categoryID:
      mapping: pathname
      strict: 0
      reactionsEnabled: 1
      emitMetadata: 0
      inputPosition: bottom
      theme: preferred_color_scheme
      lang:

  # Gitalk
  # https://github.com/gitalk/gitalk
  gitalk:
      enable: false
      clientID: # Default ClientID
      clientSecret: # Default ClientSecret
      repo: # The name of repository of store comments
      owner: # GitHub repo owner
      admin: # GitHub repo owner and collaborators, only these guys can initialize github issues
      language: # en, zh-CN, zh-TW, es-ES, fr, ru, de, pl and ko are currently available
      proxy: # CORS proxy

  # Waline
  # https://github.com/walinejs/waline
  waline:
      enable: false
      serverURL: # Waline server address url, you should set this to your own link
      locale: # Locale: https://waline.js.org/guide/client/i18n.html#locale-option
      commentCount: true # If false, comment count will only be displayed in post page, not in home page
      pageview: false # Pageviews count, Note: You should not enable both `waline.pageview` and `leancloud_visitors`
      dark: true
      emoji: # Custom emoji
          - https://unpkg.com/@waline/emojis@1.2.0/qq
          - https://unpkg.com/@waline/emojis@1.2.0/tieba
          - https://unpkg.com/@waline/emojis@1.2.0/tw-emoji
      search: false
      meta: # Comment information, valid meta are nick, mail and link
          - nick
          - mail
      requiredMeta: # Set required meta field, e.g.: [nick] | [nick, mail]
          - nick
      lang: zh-CN # Language, available values: en-US, zh-CN, zh-TW, pt-BR, ru-RU, jp-JP
      wordLimit: 0 # Word limit, no limit when setting to 0
      login: enable # Whether enable login, can choose from 'enable', 'disable' and 'force'
      pageSize: 10 # Comment per page

  # Twikoo
  # https://github.com/imaegoo/twikoo
  twikoo:
      enable: false
      envID:
      region:
      path: location.pathname
      lang:
```