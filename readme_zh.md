# HEXO theme Floblog

Floblog 是一款允许用户高度自定义的 HEXO 主题。

## 1. 使用方法

### 1.1 安装Floblog

**在根目录下**

```bash
cd theme
git clone git@github.com:FloranceYeh/hexo-theme-floblog.git Floblog
```

### 2.2 在 HEXO 根目录的 _config.yml文件中设置主题为 Floblog

```yml
theme: Floblog
```

### 3.3 启用highlight.js 

```yml
syntax_highlighter: highlight.js
highlight:
  line_number: true # alternative
  auto_detect: false
  tab_replace: '    '
  wrap: true
  hljs: true # must be true
```

## 2. 配置

Floblog 提供了许多功能供用户自定义。

### 2.1 基本配置

#### 2.1.1 图片相关

```yml
icon: /images/avatar.jpg # icon in web page tab
avatar: /images/avatar.jpg # display in sidebar or card
background: /images/background_s.jpg # bakcground image of main page
```

#### 2.1.2 主题色

使用 HSL 颜色模式中的 H 值来设置您的主题色。

Floblog 会自动为您生成辅助颜色。

```yml
theme_color: 150 # HSL(H, 65%, 45%)
# 蓝色: 200
# 红色: 6
# 绿色: 134
# 橙色: 28
# 紫色: 280
# 粉色: 330
```

#### 2.1.3 标签颜色

每当需要显示标签时，它会从列表中随机选择一种颜色。

您可以使用任何 CSS 可以解析的颜色代码。

```yml
tags_colors:
  - "#ffa2c4"
  - "#00bcd4"
  - "#03a9f4"
  - "#00a596"
  - "#ff7d73"
```

### 2.2 文章配置

#### 2.2.1 文章宽度

您可以在文章的 Front-matter 中添加 `width:x`*(1<= x <= 5, 默认为 5)* 来定义文章的宽度。

这允许用户自定义其主页上文章的排列方式。

在渲染首页时，文章将根据宽度进行排列。

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

#### 2.2.2 TOC目录(Table Of Contents)

您可以在文章的 Front-matter 中添加 `toc:true | false` 来决定是否启用目录。

目录会自动为不同级别的标题编号，因此在撰写文章时，**不建议**您自行对标题进行编号。

目录侧边栏还包含返回顶部按钮和跳转到底部按钮（当评论启用时会切换为跳转到评论按钮）。

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

#### 2.2.3 评论

您可以在文章的 Front-matter 中添加 `comments:true | false` 来决定是否启用评论。

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

### 2.3 菜单配置

您可以自由自定义菜单的位置和对齐方式。

菜单项是可扩展的；您可以添加其他页面，但不要过度添加。

当屏幕像素小于 900px 时，菜单会自动切换为下拉菜单。

**不建议**关闭菜单，否则移动端用户将无法导航到其他页面。

```yml
menu: # 图标class来自 https://fontawesome.com/icons
  enable: true # 不建议禁用 :)
  position: top # left, top, right
  align: center # start, center, end
  auto_hide: true # 当菜单位于左侧或右侧时不生效
  items:
    主页:
      link: /
      icon: fa-solid fa-house
    关于我:
      link: /about/
      icon: fa-solid fa-user
    归档:
      link: /archives/
      icon: fa-solid fa-archive
    分类: 
      link: /categories/
      icon: fa-solid fa-folder
    标签:
      link: /tags/
      icon: fa-solid fa-tags
    友链:
      link: /links/
      icon: fa-solid fa-link
```

### 2.4 文章显示配置

主页上的文章显示。

您可以自定义其内容以及"阅读更多"按钮的位置。

如果禁用了"阅读更多"按钮，用户仍然可以通过点击文章标题进入文章页面。

文章宽度应在文章的 Front-matter 中定义。

```yml
post:
  show_date: true
  show_category: true
  show_tags: true
  read_more:
    enable: true
    position: right # left, bottom, right
    text: "阅读更多"
```

### 2.5 友链配置

创建 `source/_data/links.yml` 文件来使用此功能。

它是可扩展的。

`links.yml` 文件应如下所示。

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

### 2.6 卡片配置

卡片包含一些信息和功能。

暗色模式包含在主题控制器卡片中。

> 更多组件待开发...
> - [x] 主卡片
> - [x] 主题控制器卡片
> - [ ] 日历卡片
> - [ ] 标签云卡片
> - [ ] 推荐文章卡片

```yml
cards:
  enable: true
  position: right # left, right
  description: | 
    Welcome to my blog!
  iconlinks: # 可扩展
    github:
      link: https://github.com/
      icon: fa-brands fa-github
    twitter:
      link: https://twitter.com/
      icon: fa-brands fa-twitter
    facebook:
      link: https://facebook.com/
      icon: fa-brands fa-facebook
  links: # 可扩展
    Home: /
    About: /about/
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
    Links: /links/
#   calendar: 
#     enable: true
  theme_controler:
    enable: true
    slider: true
    presets: # HSL(H, 60%, 45%), 可扩展
      blue: 200
      red: 6
      green: 134
      orange: 28
      purple: 280
      pink: 330
```

### 2.7 其他配置

#### 2.7.1 加载界面

```yml
loading: 
  enable: true 
  title: 加载中
  content: 网站正在加载，请稍等片刻。
```

#### 2.7.2 代码高亮

要启用此功能，请确保已按 `3.3` 中的配置正确设置了内容。

当代码块超过 `max_height` 时会自动折叠。

```yml
highlight:
  enable: true
  style: github-dark # 请参阅 highlight.js 上的可用样式
  max_height: 500 # 像素
```

#### 2.7.3 搜索

归档页面中的搜索栏。

只能搜索文章的标题。

```yml
search:
  enable: true
  position: right # left, top, right
  placeholder: "搜索..."
```

### 2.8 页脚配置

```yml
footer:
  enable: true
  since: 2025
  #  域名 ICP 备案信息
  ICP:
      enable: false
      code:
      link:
```

### 2.9 评论系统配置

> 此功能尚未经过充分测试，如果您遇到任何问题，请告知我。

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
      clientID: # 默认 ClientID
      clientSecret: # 默认 ClientSecret
      repo: # 存储评论的仓库名称
      owner: # GitHub 仓库所有者
      admin: # GitHub 仓库所有者和协作者，只有这些人可以初始化 GitHub issues
      language: # 当前可用的有 en, zh-CN, zh-TW, es-ES, fr, ru, de, pl, ko
      proxy: # CORS 代理

  # Waline
  # https://github.com/walinejs/waline
  waline:
      enable: false
      serverURL: # Waline 服务器地址 URL，您应将其设置为您自己的链接
      locale: # 本地化: https://waline.js.org/guide/client/i18n.html#locale-option
      commentCount: true # 如果为 false，则评论数仅显示在文章页，不在主页显示
      pageview: false # 页面浏览量统计，注意：您不应同时启用 `waline.pageview` 和 `leancloud_visitors`
      dark: true
      emoji: # 自定义表情
          - https://unpkg.com/@waline/emojis@1.2.0/qq
          - https://unpkg.com/@waline/emojis@1.2.0/tieba
          - https://unpkg.com/@waline/emojis@1.2.0/tw-emoji
      search: false
      meta: # 评论者信息，有效的 meta 字段有 nick, mail 和 link
          - nick
          - mail
      requiredMeta: # 设置必填的 meta 字段，例如: [nick] | [nick, mail]
          - nick
      lang: zh-CN # 语言，可选值: en-US, zh-CN, zh-TW, pt-BR, ru-RU, jp-JP
      wordLimit: 0 # 字数限制，设置为 0 表示无限制
      login: enable # 是否启用登录，可选 'enable', 'disable', 'force'
      pageSize: 10 # 每页评论数

  # Twikoo
  # https://github.com/imaegoo/twikoo
  twikoo:
      enable: false
      envID:
      region:
      path: location.pathname
      lang:
```