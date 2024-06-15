---
layout: post
title: "从零开始创建个人网站的旅程"
date: 2024-05-30 17:00:00 +0800
categories: create
lang: "zh"
---

### 引言

欢迎来到我的创作页面！在这篇博文中，我将与大家分享我是如何从零开始创建这个网站的全过程。希望这段经历能对那些也在尝试自己动手搭建网站的朋友们有所帮助。

<div class="quote-box">
  <p>Github Pages 网站设置</p>
</div>

**选择平台与框架**
- 经过一番研究，我决定使用 GitHub Pages 和 Jekyll 来搭建我的个人网站。Jekyll 是一个简单、博客友好的静态网站生成器，非常适合像我这样的初学者。

**初始设置**
- 首先，我在 GitHub 上创建了一个新的仓库，并克隆到本地。使用以下命令完成克隆：
  ```sh
  git clone https://github.com/henryli121/henry.github.io.git
  ```
- 接着，我安装了 Jekyll 和 Bundler，通过命令行工具初始化了 Jekyll 项目：
  ```sh
  gem install jekyll bundler
  jekyll new my-awesome-site
  cd my-awesome-site
  bundle exec jekyll serve
  ```
- 在初始化过程中，我遇到了 gem 安装失败的问题，通过更新 RubyGems 和使用 sudo 命令解决了这个问题：
  ```sh
  gem update --system
  sudo gem install jekyll bundler
  ```

**初次构建**
- 使用 Jekyll 生成的默认模板，我成功地构建了第一个版本的网站，并通过 GitHub Pages 发布到网上：
  ```sh
  bundle exec jekyll serve
  ```
- 在构建过程中，我遇到了 Jekyll 版本不兼容的问题，通过指定特定版本的 Jekyll 解决了这个问题：
  ```sh
  gem 'jekyll', '~> 4.2.0'
  bundle install
  ```
  
<div class="quote-box">
  <p>博客创建部分</p>
</div>

**配置 _config.yml**
- 网站初次构建成功后，我开始修改 `_config.yml` 文件，以自定义网站的基本信息，包括站点标题、描述、导航链接等。

**目录结构调整**
- 按照 Jekyll 的规范，我调整了项目的目录结构，确保所有文件和资源都在正确的位置上。以下是我的当前目录结构：

```
.
├── _config.yml
├── _site
├── _includes
│   ├── head.html
│   └── footer.html
├── _layouts
│   ├── base.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2024-05-26-test.md
├── assets
│   ├── blog_images
│   ├── css
│   │   ├── gallery.css
│   │   ├── lightbox.css
│   │   ├── main.css
│   │   ├── main.css.map
│   ├── images
│   └── js
├── pic.md
├── about.md
├── blog.md
├── creation.md
└── other files
```

**版本控制**
- 每次做出修改后，我都会使用 Git 进行版本控制，并将更新推送到 GitHub 上。这样可以方便地追踪历史变更，并在必要时恢复到之前的版本：
  ```sh
  git add .
  git commit -m "Initial commit"
  git push origin main
  ```

<div class="quote-box">
  <p>使用 Lightbox2 实现图片展示</p>
</div>

**引入 Lightbox2**
- 为了更好地展示图片，我决定使用 Lightbox2 插件。这个插件可以让用户点击图片时显示大图，并添加图片标题。

**安装与配置**
- 我按照 Lightbox2 的文档，将相关的 CSS 和 JS 文件引入到项目中。然而，在实现过程中遇到了标题无法正常显示的问题。经过一番排查，发现是由于 Lightbox2 的某些配置与我的项目结构不兼容。最终，通过添加 jQuery 解决了这个问题：
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  ```

<div class="quote-box">
  <p>调试与优化</p>
</div>

**调试工具的使用**
- 在开发过程中，我频繁使用浏览器的开发者工具（如 Chrome DevTools）来调试和检查页面元素、样式以及脚本错误。这对定位问题和优化性能非常有帮助。

**常见错误与解决方案**

**目录结构问题**
- 项目目录结构不清晰可能导致资源文件无法正确加载。确保所有文件和资源都在正确的位置上，如 `_includes` 文件夹中的 `head.html` 和 `footer.html`，以及 `_layouts` 文件夹中的其他 HTML 文件。

-  `_site` 文件夹用于存储 Jekyll 构建后的静态网站文件，每次构建时都会被重新生成。因此，任何修改都应该在源文件中完成，而不是直接修改 `_site` 中的文件。

**资源文件路径**
- 在使用资源文件（如图片、CSS、JS）时，确保使用相对路径，这样在本地和 GitHub Pages 上都能正常工作。例如：
  ```html
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
  <script src="{{ '/assets/js/lightbox.js' | relative_url }}"></script>
  ```

**其他问题**
- 文件路径错误：确保所有资源文件都在正确的路径下，避免使用绝对路径。
- 缓存问题：每次更新后清除浏览器缓存，确保加载到的是最新版本的文件：
  ```sh
  bundle exec jekyll clean
  bundle exec jekyll serve
  ```
- 兼容性问题：检查不同浏览器下的显示效果，确保网站在主流浏览器中都能正常工作。

**遇到的其他问题**
- 在实现一些特定功能时，比如创建博客页面和添加社交媒体按钮，遇到了样式问题和 JavaScript 错误。通过不断调试和查阅文档，最终解决了这些问题。

### 复盘
其实，在使用 Jekyll 搭建我的个人网站之前，我也尝试过市面上其他的平台，比如 WordPress 和 Wix，但它们都有进阶内容付费、自主性低的问题。所以我决定从源代码开始写网站。通过这次从零开始的搭建经历，我最感到吃惊的是现在编程学习或者网络技术学习的成本之低。

在开始这个项目之前，我从未接触过 HTML 和 CSS。于是抱着尝试的态度，我开始了这个项目。当然，敢于继续下去的另一个原因是 <b>ChatGPT-4o</b>。毫不夸张地说，这个网页80%的代码都是 ChatGPT 帮我写的，它就像一个得力的助手，虽然称不上老师，但已足够优秀。当然，它不可能一口气全部帮你写出来，更多的是你和它的合作。在这个项目中，我关注的是整体的逻辑步骤，比如：如何搭建一个最基本的框架，然后逐步加入细节的调整，再进行优化和美化。我需要把这些步骤拆分成一个个小任务，再让 ChatGPT 来帮我写。一个个小任务的完成，最终搭建出了整个网站。

相对于几十年前动辄几个月的编程课程，现在在 AI 技术的加持下，编程学习或者网络技术学习的成本已经非常低。到网站目前这个状态，一共也就花费了我两天的时间。甚至这篇博文的大部分内容也是 ChatGPT 帮我总结的，因为它能够记住从项目开始以来我们之间的对话。因此，我只需要告诉它：“帮我把这个项目的过程写成一篇博客，名字叫‘从零开始创建个人网站的旅程’。”于是，15秒的时间这篇文章就写好了。至于哪些部分是我写的，就留给你们去猜测吧。

### 结语

创建这个网站的过程充满了挑战与乐趣。从最初的框架选择，到中途的各种问题排查，再到最后的调试优化，每一步都是一次学习和成长的机会。希望通过这篇博文，能为同样在搭建网站道路上的你提供一些启发和帮助。

如果你在网站创建过程中遇到了类似的问题，欢迎留言，我们可以一起讨论和解决。谢谢阅读！