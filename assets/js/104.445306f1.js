(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{861:function(t,s,e){"use strict";e.r(s);var a=e(34),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("我们收集了一些常见的问题在这里，如果你在这里没有找到想要的答案，可以尝试在文档中寻找相关内容，如果问题仍然无法解决，请加入微信交流群交流讨论。")]),t._v(" "),e("p",[t._v("值得注意的是，本主题几乎继承 "),e("code",[t._v("VuePress")]),t._v(" 默认主题的一切功能，所以本文档只负责介绍该主题扩展的功能，如果你发现某些功能本网站没有相关文档，或者想要了解默认主题的一些功能，请移步 "),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("。")])]),e("h2",{attrs:{id:"_1-如何添加-icon-font"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何添加-icon-font"}},[t._v("#")]),t._v(" 1. 如何添加 "),e("code",[t._v("icon-font")]),t._v(" ？")]),t._v(" "),e("ol",[e("li",[t._v("将字体文件放在 "),e("code",[t._v("public")]),t._v(" 文件夹下，然后在 "),e("code",[t._v("enhanceApp.js")]),t._v(" 中引入字体文件中的css文件即可生效;")]),t._v(" "),e("li",[t._v("如果你的 "),e("code",[t._v("icon")]),t._v(" 完整的 "),e("code",[t._v("className")]),t._v(" 是 "),e("code",[t._v('class="iconfont icon-myIcon"')]),t._v("，设置 "),e("code",[t._v("icon-font")]),t._v(" 时应设置为 "),e("code",[t._v("{ text: '首页', link: '/', icon: 'iconfont icon-myIcon' }")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"_2-如何显示摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何显示摘要"}},[t._v("#")]),t._v(" 2. 如何显示摘要？")]),t._v(" "),e("p",[t._v("文档中 "),e("code",[t._v("\x3c!-- more --\x3e")]),t._v(" 以上部分会被当作摘要。")]),t._v(" "),e("RecoDemo",{attrs:{collapse:!0}},[e("template",{slot:"code-markdown"},[e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 摘要\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2019-11-01")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\n这里的内容会被显示成摘要。\n\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 可以放置文案；\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 可以放置图片作为文章封面。\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- more --\x3e")]),t._v("\n\n这里是文章的正文。")])])])])],2),t._v(" "),e("h2",{attrs:{id:"_3-首页页脚是否可以自定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-首页页脚是否可以自定义"}},[t._v("#")]),t._v(" 3. 首页页脚是否可以自定义？")]),t._v(" "),e("p",[t._v("不可以。")]),t._v(" "),e("h2",{attrs:{id:"_4-首页右侧信息栏头像和导航栏左侧的图片分别怎么设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-首页右侧信息栏头像和导航栏左侧的图片分别怎么设置"}},[t._v("#")]),t._v(" 4. 首页右侧信息栏头像和导航栏左侧的图片分别怎么设置？")]),t._v(" "),e("p",[t._v("首页右侧信息栏头像需要通过配置 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),e("code",[t._v("themeConfig.authorAvatar")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("authorAvatar")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/avatar.png'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("导航栏左侧的图片需要通过配置 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),e("code",[t._v("themeConfig.logo")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("logo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("此外，你需要将你的图片放在 "),e("code",[t._v(".vuepress/public/")]),t._v(" 中")]),t._v(" "),e("h2",{attrs:{id:"_5-文章的存放位置有规定吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-文章的存放位置有规定吗"}},[t._v("#")]),t._v(" 5. 文章的存放位置有规定吗？")]),t._v(" "),e("p",[t._v("你可以将你的文章存放在任意位置，但是你需要保证它是 VuePress 可以解析的位置，比如你使用的命令是 "),e("code",[t._v("vuepress dev docs")]),t._v(" ，那么请将所有文章存放在 "),e("code",[t._v("docs/")]),t._v(" 中，但是主题并不会强制你放在哪个子目录，这个按照你的喜好来即可，详情见 "),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细的 VuePress 目录结构配置"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_6-侧边栏为什么不显示一级标题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-侧边栏为什么不显示一级标题"}},[t._v("#")]),t._v(" 6. 侧边栏为什么不显示一级标题？")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("vuepress-theme-reco")]),t._v(" 中，请摒弃一级标题，使用 "),e("code",[t._v("front-matter")]),t._v(" 生成标题以及其他文章信息，正文从二级标题开始。")]),t._v(" "),e("h2",{attrs:{id:"_7-1-1-0-版本会在首页出现评论怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-0-版本会在首页出现评论怎么解决"}},[t._v("#")]),t._v(" 7. "),e("code",[t._v("1.1.0")]),t._v(" 版本会在首页出现评论怎么解决？")]),t._v(" "),e("p",[t._v("该问题已经在 "),e("code",[t._v("1.1.1")]),t._v(" 版本中得到解决。")]),t._v(" "),e("h2",{attrs:{id:"_8-如何自定义评论区样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-如何自定义评论区样式"}},[t._v("#")]),t._v(" 8. 如何自定义评论区样式？")]),t._v(" "),e("p",[e("code",[t._v("VuePress")]),t._v(" 允许你在 "),e("code",[t._v(".vuepress/styles/index.styl")]),t._v(" 为你的网站添加样式，你可以通过这个方式来修改主题（包括评论区）内的基本所有样式，详情请见 "),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#index-styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 添加样式"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_9-是否支持图片点击放大功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-是否支持图片点击放大功能"}},[t._v("#")]),t._v(" 9. 是否支持图片点击放大功能？")]),t._v(" "),e("p",[t._v("主题在 "),e("code",[t._v("1.1.1")]),t._v(" 中已经将 "),e("code",[t._v("@vuepress/medium-zoom")]),t._v(" 作为内置插件，支持文章内容中的图片点击放大功能，详情见 "),e("RouterLink",{attrs:{to:"/views/plugins/#主题内置插件"}},[t._v("主题内置插件")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"_10-插件或者主题不生效怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-插件或者主题不生效怎么办"}},[t._v("#")]),t._v(" 10. 插件或者主题不生效怎么办？")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("由于主题和插件在配置和使用上有着很大的相似性（"),e("code",[t._v("Vuepress")]),t._v(" 中有提到 "),e("code",[t._v("theme/index.js")]),t._v(" 也是插件），以下步骤中均以“插件”代替“插件或者主题”")])]),e("p",[t._v("请按以下步骤进行检查：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("查看编译时终端的输出信息是否已加载插件")]),t._v(" "),e("ul",[e("li",[t._v("如果未加载该插件，请检查 "),e("code",[t._v("config.js")]),t._v(" 是否已按正确格式进行配置。")]),t._v(" "),e("li",[t._v("如果显示该插件加载错误，请检查该插件是否已经下载安装。")]),t._v(" "),e("li",[t._v("如果已经下载安装后仍然无法正常加载插件，请删除 "),e("code",[t._v("node-modules/")]),t._v(" ，并重新安装依赖（建议使用 yarn 而不是 npm）。")])])]),t._v(" "),e("li",[e("p",[t._v("如果是在前端生效的插件，检查控制台看是否有报错信息，根据报错信息查找原因。")])]),t._v(" "),e("li",[e("p",[t._v("仔细对比文档中的支持的 "),e("code",[t._v("Options")]),t._v("，重新配置 "),e("code",[t._v("config.js")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("搜索插件所在项目或者社区有没有相似 "),e("code",[t._v("issue")]),t._v(" 及解决方案。")])])]),t._v(" "),e("h2",{attrs:{id:"_11-could-not-resolve-xxx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-could-not-resolve-xxx"}},[t._v("#")]),t._v(' 11. Could not resolve "xxx"')]),t._v(" "),e("ol",[e("li",[t._v("如果某个依赖包出现这种报错，那就是没有安装好，保证你的网络畅通，删除 "),e("code",[t._v("node_modules")]),t._v(" 重新安装即可；如果上面办法解决不了，那恭喜你，认命吧，因为可能是系统环境原因，我个人也出现过这种玄学 bug，还好有一种解决办法，在项目根目录单独安装这个依赖即可 "),e("code",[t._v("npm install xxx --save")]),t._v("；")]),t._v(" "),e("li",[t._v("如果某个文件出现这种报错，那就是某个地方引用了此文件，但是你的项目中没有，定位到引用在哪里即可。")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);