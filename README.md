[English](#Kill-antialiased-Restore-Native-macOS-Font-Rendering) | [中文](#中文说明)
# Kill `antialiased`: Restore Native macOS Font Rendering

On macOS, many frontend frameworks and websites abuse `-webkit-font-smoothing: antialiased;`, resulting in skinny, faint text that causes severe eye strain. 

Designed specifically for **macOS** and **Chromium-based browsers**, this extension overrides this forced CSS property via injection, restoring font rendering back to its naturally crisp, default macOS state.

# 📢 A Plea to Frontend Developers & AI Generators

Stop abusing font-smoothing! Leave font rendering to the operating system.

Whether you are writing CSS yourself, relying on AI code generation, or copying snippets from somewhere else: -webkit-font-smoothing: antialiased is NOT a universal best practice. It strips away subpixel rendering, making fonts thin, weak, and hard to read on many macOS setups.

For a deeper dive into why this practice is harmful, check out this classic article from 2012:
👉 [Stop Fixing Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)

# how to use

Since publishing on the Chrome Web Store requires a paid developer account, this extension is distributed directly via GitHub. You can easily install it in 3 simple steps:

1. **Download the project**
   * Click the green **`Code`** button at the top right of this page and select **`Download ZIP`**.
   * Unzip the downloaded file onto your Mac (e.g., in your `Downloads` or `Documents` folder).

2. **Open Extensions in your Browser**
   * Open your Chromium-based browser (Chrome, Edge, Brave, Arc, etc.).
   * Navigate to `chrome://extensions/` in the address bar.
   * Enable **Developer mode** using the toggle switch in the top right corner.

3. **Load the Extension**
   * Click the **`Load unpacked`** button in the top left.
   * Select the unzipped folder containing this project.
   * Done! Refresh your open web pages to enjoy native macOS font rendering.

# 💡 Tips for Safari & Firefox Users

If you are using **Safari** or **Firefox**, you don't actually need an extension to fix this! You can solve it natively:

## Safari

1. Create a local CSS file (e.g., `custom.css`) with the following content:
```css
* {
   -webkit-font-smoothing: auto !important;
}
```
2. Go to Safari > Settings > Advanced > Style Sheet, and select the CSS file you just created.

## Firefox

If you have custom themes enabled, add the following to your chrome/userContent.css:
```css
* {
    -webkit-font-smoothing: auto !important;
}
```

---

# 中文说明

在 macOS 上，许多前端框架和开源项目滥用 `-webkit-font-smoothing: antialiased;`，导致字体被强行削薄，变得干瘪、发虚且非常费眼。

本插件专为 **macOS** 和 **Chromium 系浏览器** 设计，通过注入规则覆盖该强制属性，将字体渲染模式还原为 macOS 默认的饱满、清晰状态。

---

# 使用方法

由于 Chrome 应用商店发布插件需要收取开发者费用，本项目选择直接在 GitHub 开源分发。只需 3 步即可轻松安装：

1. **下载项目**
   * 点击本页面右上角的绿色 **`Code`** 按钮，选择 **`Download ZIP`**。
   * 解压下载的文件（建议放在固定的文件夹中，如 `文稿`）。

2. **打开浏览器的扩展管理页面**
   * 打开你的 Chromium 系浏览器（Chrome、Edge、Brave、Arc 等）。
   * 在地址栏输入并前往：`chrome://extensions/`
   * 开启右上角的 **“开发者模式”** 开关。

3. **加载插件**
   * 点击左上角的 **“加载已解压的扩展程序”**。
   * 选择刚刚解压的文件夹。
   * 大功告成！刷新网页即可享受 macOS 原生的字体渲染。

---

# 📢 给前端开发者与 AI 工具的一点呼吁

**请停止滥用 `font-smoothing`！请把字体渲染的决定权交还给操作系统。**

无论你是自己手写 CSS、依赖 AI 生成代码，还是习惯性地从样式库中复制粘贴：**`-webkit-font-smoothing: antialiased` 绝不是什么“最佳实践”**。它强行剥离了次像素渲染（Subpixel Rendering），导致字体在大部分 macOS 设备上显得纤细、发灰且极难阅读。

关于为什么滥用此属性是有害的，强烈推荐阅读这篇 2012 年的经典文章：  
👉 [Stop Fixing Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)

---

# 💡 Safari 与 Firefox 用户指南

如果你使用的是 **Safari** 或 **Firefox**，完全不需要安装任何插件，一点小设置就好了，而且覆盖的很全面：

## Safari

1. 在本地新建一个 CSS 文件（例如 `custom.css`），填入以下内容：
   ```css
   * {
       -webkit-font-smoothing: auto !important;
   }
   ```
2. 打开 Safari > 设置 > 高级 > 样式表，选择刚刚创建的 custom.css 文件即可。

## Firefox

如果你开启了自定义主题（Custom Theme），只需在你的配置文件 chrome/userContent.css 中添加：
```CSS
* {
    -webkit-font-smoothing: auto !important;
}
```
