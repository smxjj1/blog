(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{538:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("如何让 scss 代码可复用？三种复用方式分别用在何处？下方是一段自定义大小的样例 👇")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px !default;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px !default;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" size($list...) {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@if")]),s._v(" length($list) "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("=")]),s._v(" 0 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$height")]),s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else if ")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("($list) == 1 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else if ")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("($list) == 2 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nth("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(", 1);")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nth("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(", 2);")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@debug")]),s._v(' "Too many parameters";')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("(本文使用的是： scss v3.5.6 和 ruby v2.4.4)")]),s._v(" "),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),a("p",[s._v("在 scss 中，一个样式类，可以被其他样式类直接继承，从而减少重复代码的编写。")]),s._v(" "),a("p",[s._v("例如，在 css 中，代码如下：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn,\n.btn--primary,\n.btn--info")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--info")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("在 scss 中，代码如下：")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid blue;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" .btn;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--info {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gray;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" .btn;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("对比 css 的代码，编写出的 scss 代码语义更强："),a("code",[s._v(".btn")]),s._v("是基础样式类，"),a("code",[s._v(".btn--primary")]),s._v("和"),a("code",[s._v(".btn--info")]),s._v("是扩展样式类。")]),s._v(" "),a("h2",{attrs:{id:"占位符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#占位符"}},[s._v("#")]),s._v(" 占位符")]),s._v(" "),a("p",[s._v("顾名思义，如果不被引用，它是不会被编译到 css 文件中的。这是和继承最大区别。")]),s._v(" "),a("p",[s._v("scss 代码如下：")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("%btn {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid blue;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有被extend")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不会出现在css文件中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("%test-btn {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid black;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %btn;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--info {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gray;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@extend")]),s._v(" %btn;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("编译后的 css 代码，并没有占位符"),a("code",[s._v("%test-btn")]),s._v("的样式代码。编译后的 css 如下：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary,\n.btn--info")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--info")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"混合宏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合宏"}},[s._v("#")]),s._v(" 混合宏")]),s._v(" "),a("p",[s._v("它是 scss 中的函数，通过关键字"),a("code",[s._v("@mixin")]),s._v("声明，"),a("code",[s._v("@include")]),s._v("引用。")]),s._v(" "),a("h3",{attrs:{id:"无参调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无参调用"}},[s._v("#")]),s._v(" 无参调用")]),s._v(" "),a("p",[s._v("scss：")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" btn {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" btn;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("编译后的 css：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数调用"}},[s._v("#")]),s._v(" 参数调用")]),s._v(" "),a("p",[s._v("scss:")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px !default;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" btn($radius: 5px) {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认是 5px")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$radius")]),s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" btn($radius); // 传入参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("编译后的 css：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参数运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数运算符"}},[s._v("#")]),s._v(" "),a("code",[s._v("...")]),s._v("参数运算符")]),s._v(" "),a("p",[s._v("scss:")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px !default;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px !default;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" size($list...) {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@if")]),s._v(" length($list) "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("=")]),s._v(" 0 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$height")]),s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else if ")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("($list) == 1 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else if ")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("($list) == 2 {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nth("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(", 1);")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nth("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$list")]),s._v(", 2);")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("} @else {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@debug")]),s._v(' "Too many parameters";')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" size();")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--big {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" size(20px, 25px);")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--square {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" size(18px);")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--test {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" size(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("1px")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("2px")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("3px")]),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("4px")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("); // just a test. console output ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Too many parameters"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("what we have defined.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("编译后的 css：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--big")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 25px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn--square")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),a("p",[s._v("优点是可以传递参数，更加灵活。缺点是编译后的 css 代码可能存在“冗赘”，例如下方代码：")]),s._v(" "),a("div",{staticClass:"language-Sass (scss) line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@mixin")]),s._v(" border-radius {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" border-radius;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".btn {")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[s._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@include")]),s._v(" border-radius;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("在这种灵活性不高的场景下，“占位符”是更好的选择。")]),s._v(" "),a("h2",{attrs:{id:"思考：编程语言特性-预处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考：编程语言特性-预处理"}},[s._v("#")]),s._v(" 思考：编程语言特性 & 预处理")]),s._v(" "),a("p",[s._v("除了文中所述的 3 种样式复用的手段，scss 更引入了变量声明、循环、条件判断、函数（混合宏）、模块等编程语言才有的概念，使得开发者在编写样式代码的时候也可以编写复杂逻辑。")]),s._v(" "),a("p",[s._v("但 scss 本身还是预处理器（浏览器无法直接解析），一段短小精悍的代码，经过预处理后的 css 代码可能非常庞大。比如在 scss 中编写经典的“24 栅栏布局”代码，一个从 0-23 的循环即可，寥寥几行。但是最终生成的 css 一行都不会少。")]),s._v(" "),a("p",[s._v("因此，不光要利用 scss 的编程语言特性来简化样式代码，还要考虑编译后的 css 文件的大小。毕竟网络传输开销辣么大！")])])}),[],!1,null,null,null);t.default=e.exports}}]);