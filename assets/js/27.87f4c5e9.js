(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{725:function(t,e,a){t.exports=a.p+"assets/img/kanbannaing_1.9d4605aa.png"},726:function(t,e,a){t.exports=a.p+"assets/img/kanbanniang_2.ef1f6e5b.png"},814:function(t,e,a){"use strict";a.r(e);var s=a(34),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction "),s("GitHubLink",{attrs:{repo:"vuepress-reco/vuepress-plugin-kan-ban-niang/"}})],1),t._v(" "),s("p",[s("img",{attrs:{src:a(725),alt:"demo.png"}})]),t._v(" "),s("p",[s("code",[t._v("kan-ban-niang")]),t._v(" plugin for vuepress-theme-reco or other vuepress themes.")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("As plugin")]),t._v(": "),s("code",[t._v("@vuepress-reco/vuepress-plugin-kan-ban-niang")])]),t._v(" "),s("li",[s("strong",[t._v("As component")]),t._v(": "),s("code",[t._v("KanBanNiang")]),t._v(" (auto appear in the page, no need for extra code)")])]),t._v(" "),s("h3",{attrs:{id:"buttons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buttons"}},[t._v("#")]),t._v(" Buttons")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Button")]),t._v(" "),s("th",[t._v("Use")]),t._v(" "),s("th",[t._v("Default Tip")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("home")]),t._v(" "),s("td",[t._v("Back to home of blog")]),t._v(" "),s("td",[t._v("You are the apple of my eye and I want to bring you home")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("Show site title")]),t._v(" "),s("td",[t._v("'Welcome to ' + Your site title ($site.title)")])]),t._v(" "),s("tr",[s("td",[t._v("theme")]),t._v(" "),s("td",[t._v("Modify theme")]),t._v(" "),s("td",[t._v("OK, I hope you love my other friends")])]),t._v(" "),s("tr",[s("td",[t._v("close")]),t._v(" "),s("td",[t._v("Close kanbannaing")]),t._v(" "),s("td",[t._v("I love you most")])]),t._v(" "),s("tr",[s("td",[t._v("info")]),t._v(" "),s("td",[t._v("Jump to plugin's GitHub page")]),t._v(" "),s("td",[t._v("Do you want to know more about me?")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("This plugin hasn't been translated to English yet and the above "),s("code",[t._v("default tip")]),t._v(" is merely translation of the Chinese version.")])]),s("h2",{attrs:{id:"option-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[t._v("#")]),t._v(" Option API")]),t._v(" "),s("blockquote",[s("p",[t._v("default parameters when using the plugin")])]),t._v(" "),s("p",[s("strong",[t._v("Attributes")])]),t._v(" "),s("h3",{attrs:{id:"theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),s("ul",[s("li",[t._v("description: default theme")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']")])]),t._v(" "),s("li",[t._v("accepted-values:\n"),s("ul",[s("li",[t._v("if theme includes only one value, default to this theme and hide the button to change theme")]),t._v(" "),s("li",[t._v("if theme includes multiple values, default to the first theme and randomly switch to other themes when "),s("code",[t._v("theme")]),t._v(" button is clicked")]),t._v(" "),s("li",[t._v("note the case of theme name")]),t._v(" "),s("li",[t._v("see "),s("a",{attrs:{href:"#available-themes"}},[t._v("available themes")]),t._v(" at the end")])])])]),t._v(" "),s("h3",{attrs:{id:"clean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[t._v("#")]),t._v(" clean")]),t._v(" "),s("ul",[s("li",[t._v("description: if clean mode is on (hide all buttons)")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Boolean")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("false")])]),t._v(" "),s("li",[t._v("accepted-values: "),s("code",[t._v("true | false")])])]),t._v(" "),s("h3",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[t._v("#")]),t._v(" messages")]),t._v(" "),s("ul",[s("li",[t._v("description: message tip")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("default:"),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    welcome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '欢迎来到 ' + 您的站点名称（$site.title）"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    home"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '心里的花，我想要带你回家。'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '好吧，希望你能喜欢我的其他小伙伴。'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    close"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '你知道我喜欢吃什么吗？痴痴地望着你。'\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("accepted-values: see the end")])]),t._v(" "),s("h3",{attrs:{id:"messagestyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagestyle"}},[t._v("#")]),t._v(" messageStyle")]),t._v(" "),s("ul",[s("li",[t._v("description: customize message style")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("default:"),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '68px'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '190px'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"modelstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modelstyle"}},[t._v("#")]),t._v(" modelStyle")]),t._v(" "),s("ul",[s("li",[t._v("description: customize model style")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("default:"),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '90px'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '-20px'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  opacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"btnstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#btnstyle"}},[t._v("#")]),t._v(" btnStyle")]),t._v(" "),s("ul",[s("li",[t._v("description: customize button style")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("default:"),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '90px'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '40px'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),s("ul",[s("li",[t._v("description: theme width")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Number")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("150")])])]),t._v(" "),s("h3",{attrs:{id:"height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#height"}},[t._v("#")]),t._v(" height")]),t._v(" "),s("ul",[s("li",[t._v("description: theme height")]),t._v(" "),s("li",[t._v("type: "),s("code",[t._v("Number")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("220")])])]),t._v(" "),s("h2",{attrs:{id:"available-themes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-themes"}},[t._v("#")]),t._v(" Available Themes")]),t._v(" "),s("p",[s("img",{attrs:{src:a(726),alt:"themes.png"}})]),t._v(" "),s("h2",{attrs:{id:"about"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),s("ul",[s("li",[t._v("reference plugin: "),s("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),s("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/vuepress-plugin-cat")]),t._v(" "),s("li",[t._v("theme repo： "),s("a",{attrs:{href:"https://github.com/QiShaoXuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Qi"),s("OutboundLink")],1),t._v(" https://github.com/QiShaoXuan/live2DModel")]),t._v(" "),s("li",[t._v("theme auto hides if failed to load")]),t._v(" "),s("li",[t._v("speed is unstable when loading static assets")]),t._v(" "),s("li",[t._v("could use other theme by downloading the plugin and change theme url")])]),t._v(" "),s("h2",{attrs:{id:"contributors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),s("Contributors",{attrs:{user:"vuepress-reco",repo:"vuepress-plugin-kan-ban-niang"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);