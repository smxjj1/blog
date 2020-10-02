(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{541:function(s,a,e){"use strict";e.r(a);var t=e(12),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("code",[s._v("Sass")]),s._v(" 和 "),e("code",[s._v("SCSS")]),s._v(" 其实是同一种东西，我们平时都称之为 "),e("code",[s._v("Sass")]),s._v("。")]),s._v(" "),e("p",[s._v("他们都是用"),e("code",[s._v("Ruby")]),s._v("开发 Css 预处理器，"),e("code",[s._v("boostrap4")]),s._v("已经将"),e("code",[s._v("less")]),s._v("换成了"),e("code",[s._v("scss")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"scss和sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scss和sass"}},[s._v("#")]),s._v(" "),e("code",[s._v("SCSS")]),s._v("和"),e("code",[s._v("Sass")])]),s._v(" "),e("p",[e("code",[s._v("Sass")]),s._v(" 和 "),e("code",[s._v("SCSS")]),s._v(" 其实是同一种东西，我们平时都称之为 "),e("code",[s._v("Sass")]),s._v("。"),e("strong",[s._v("他们都是用**")]),e("code",[s._v("Ruby")]),s._v("*"),e("strong",[s._v("*开发 Css 预处理器，**")]),e("code",[s._v("boostrap4")]),s._v("*"),e("strong",[s._v("*已经将**")]),e("code",[s._v("less")]),s._v("*"),e("strong",[s._v("*换成了**")]),e("code",[s._v("sass")]),s._v("*"),e("strong",[s._v("*。")])]),s._v(" "),e("p",[s._v("不同之处：")]),s._v(" "),e("ul",[e("li",[s._v("文件拓展名：分别是"),e("code",[s._v("sass")]),s._v("和"),e("code",[s._v("scss")])]),s._v(" "),e("li",[s._v("缩进："),e("code",[s._v("sass")]),s._v("严格缩进（类似 python 和 ruby），"),e("code",[s._v("scss")]),s._v("是 css 的缩进样式")]),s._v(" "),e("li",[s._v("是否兼容 css 语法：显然，由于缩进的不同，"),e("code",[s._v("scss")]),s._v("是兼容原生的 css 写法。")])]),s._v(" "),e("p",[s._v("总的来说，"),e("code",[s._v("scss")]),s._v("是"),e("code",[s._v("sass")]),s._v("升级版，兼容 css 语法，并且有着自己的独立语法。")]),s._v(" "),e("h2",{attrs:{id:"环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),e("ol",[e("li",[s._v("安装 ruby：windows 注意添加注册表路径")]),s._v(" "),e("li",[s._v("安装 sass：利用 ruby 的包管理器"),e("code",[s._v("gem")]),s._v("安装，命令行运行:"),e("code",[s._v("gem install sass")])]),s._v(" "),e("li",[s._v("升级和删除 sass："),e("code",[s._v("gem update/uninstall sass")])])]),s._v(" "),e("p",[e("strong",[s._v("如果国外源过慢？")])]),s._v(" "),e("div",{staticClass:"language-Bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("gem sources --remove https://rubygems.org/\ngem sources -a https://ruby.taobao.org/\ngem sources -l "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看是不是淘宝源")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),e("p",[s._v("编译指的是：将 scss 文件编译为 css 文件的过程。")]),s._v(" "),e("h3",{attrs:{id:"源文件编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源文件编译"}},[s._v("#")]),s._v(" 源文件编译")]),s._v(" "),e("p",[e("strong",[s._v("单文件编译")])]),s._v(" "),e("div",{staticClass:"language-Bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式：sass 待编译的Sass文件名:编译后CSS文件名")]),s._v("\nscss scss.scss:css.css\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("实时自动编译")])]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("--watch")]),s._v("参数即可，scss 会在源文件改动时候，自动重新编译。")]),s._v(" "),e("div",{staticClass:"language-Bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("scss --watch scss.scss:css.css "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方便")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"输出文件风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出文件风格"}},[s._v("#")]),s._v(" 输出文件风格")]),s._v(" "),e("p",[s._v("命令行编译时候，使用"),e("code",[s._v("--style")]),s._v("参数。")]),s._v(" "),e("p",[s._v("一段 scss 代码：")]),s._v(" "),e("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sass"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body {")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1 {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red;")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("默认：嵌套输出方式 nested")])]),s._v(" "),e("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sass"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red;")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("展开输出方式 expanded")])]),s._v(" "),e("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sass"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red;")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("紧凑输出方式 compact")])]),s._v(" "),e("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sass"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red;")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("压缩输出方式 compressed")])]),s._v(" "),e("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sass"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body h1 {")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red;")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),e("blockquote",[e("p",[s._v("最新的 scss 开启了"),e("code",[s._v("sourcemap")]),s._v("功能，"),e("code",[s._v("--sourcemap")]),s._v("参数默认添加。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);