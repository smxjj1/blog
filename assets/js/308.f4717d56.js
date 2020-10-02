(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{565:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("博主使用"),a("code",[s._v("Vue")]),s._v("开发的"),a("a",{attrs:{href:"https://godbmw.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("个人博客"),a("OutboundLink")],1),s._v("，博文使用"),a("code",[s._v("markdown")]),s._v("语法编写，然后交给前端渲染。为了更方便的进行说明和讲解，"),a("strong",[s._v("需要前端支持**")]),a("code",[s._v("LaTex")]),s._v("*"),a("strong",[s._v("*的数学公式，并且渲染好看的样式")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("博主使用"),a("code",[s._v("Vue")]),s._v("开发的"),a("a",{attrs:{href:"https://godbmw.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("个人博客"),a("OutboundLink")],1),s._v("，博文使用"),a("code",[s._v("markdown")]),s._v("语法编写，然后交给前端渲染。为了更方便的进行说明和讲解，"),a("strong",[s._v("需要前端支持**")]),a("code",[s._v("LaTex")]),s._v("*"),a("strong",[s._v("*的数学公式，并且渲染好看的样式")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"效果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果展示"}},[s._v("#")]),s._v(" 效果展示")]),s._v(" "),a("p",[s._v("数学公式分为行内公式和跨行公式，当然都需要支持和渲染。")]),s._v(" "),a("p",[s._v("我准备了 3 条公式，分别是行内公式、跨行公式和超长的跨行公式：")]),s._v(" "),a("div",{staticClass:"language-纯文本 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$\\alpha+\\beta=\\gamma$\n$$\\alpha+\\beta=\\gamma$$\n$$\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}$$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这篇测试文章的地址是:"),a("a",{attrs:{href:"https://godbmw.com/passage/12",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("https://godbmw.com/passage/12")]),a("OutboundLink")],1),s._v("。效果图如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/MathJax%EF%BC%9A%E8%AE%A9%E5%89%8D%E7%AB%AF%E6%94%AF%E6%8C%81%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F/1.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"使用-mathjax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-mathjax"}},[s._v("#")]),s._v(" 使用 MathJax")]),s._v(" "),a("h3",{attrs:{id:"引入-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入-cdn"}},[s._v("#")]),s._v(" 引入 CDN")]),s._v(" "),a("p",[s._v("在使用 MathJax 之前，需要通过 CDN 引入, 在"),a("code",[s._v("<body>")]),s._v("标签中添加：")]),s._v(" "),a("p",[a("code",[s._v('<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"><\/script>')]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"配置-mathjax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-mathjax"}},[s._v("#")]),s._v(" 配置 MathJax")]),s._v(" "),a("p",[s._v("将 MathJax 的配置封装成一个函数：")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 防止重复调用Config，造成性能损耗")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("initMathjaxConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        showProcessingMessages"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关闭js加载过程信息")]),s._v("\n        messageStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不显示信息")]),s._v("\n        jax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"input/TeX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"output/HTML-CSS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        tex2jax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            inlineMath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\("')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//行内公式选择符")]),s._v("\n            displayMath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\["')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//段内公式选择符")]),s._v("\n            skipTags"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noscript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"textarea"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//避开某些标签")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTML-CSS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            availableFonts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STIX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TeX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可选字体")]),s._v("\n            showMathMenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关闭右击菜单显示")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"使用-mathjax-渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-mathjax-渲染"}},[s._v("#")]),s._v(" 使用 MathJax 渲染")]),s._v(" "),a("p",[s._v("MathJax 提供了"),a("code",[s._v("window.MathJax.Hub.Queue")]),s._v("来执行渲染。在执行完文本获取操作后，进行渲染操作：")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果：没有配置MathJax")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initMathjaxConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果，不传入第三个参数，则渲染整个document")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为使用的Vuejs，所以指明#app，以提高速度")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Typeset"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"修改默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认样式"}},[s._v("#")]),s._v(" 修改默认样式")]),s._v(" "),a("p",[a("code",[s._v("MathJax")]),s._v("默认样式在被鼠标"),a("code",[s._v("focus")]),s._v("的时候，会有蓝色边框出现。对于超长的数学公式，x 方向也会溢出。")]),s._v(" "),a("p",[s._v("添加以下样式代码，覆盖原有样式，从而解决上述问题：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* MathJax v2.7.5 from 'cdnjs.cloudflare.com' */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".mjx-chtml")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".MJXc-display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("h3",{attrs:{id:"不要使用npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要使用npm"}},[s._v("#")]),s._v(" 不要使用"),a("code",[s._v("npm")])]),s._v(" "),a("p",[a("strong",[s._v("不要使用 npm，会有报错，google 了一圈也没找到解决方案，github 上源码地址有对应的**")]),a("code",[s._v("issue")]),s._v("*"),a("strong",[s._v("*还没解决")]),s._v("。")]),s._v(" "),a("p",[s._v("博主多次尝试也没有找到解决方法，坐等版本更新和大神指点。")]),s._v(" "),a("h3",{attrs:{id:"动态数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态数据"}},[s._v("#")]),s._v(" 动态数据")]),s._v(" "),a("p",[s._v("在 SPA 单页应用中，数据是通过"),a("code",[s._v("Ajax")]),s._v("获取的。此时，"),a("strong",[s._v("需要在数据获取后，再执行渲染")]),s._v("。")]),s._v(" "),a("p",[s._v("如果习惯"),a("code",[s._v("es5")]),s._v("，可以在回调函数中调用"),a("code",[s._v("window.MathJax.Hub.Queue")]),s._v("。但是更推荐"),a("code",[s._v("es6")]),s._v("，配合"),a("code",[s._v("Promise")]),s._v("和"),a("code",[s._v("async/await")]),s._v("来避免“回调地域”。")]),s._v(" "),a("h3",{attrs:{id:"版本问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本问题"}},[s._v("#")]),s._v(" 版本问题")]),s._v(" "),a("p",[s._v("对于不同版本或者不同 CDN 的"),a("code",[s._v("MathJax")]),s._v("，第二部分的样式覆盖的"),a("code",[s._v("class")]),s._v("名称不同。比如在"),a("code",[s._v("cdnboot")]),s._v("的"),a("code",[s._v("v2.7.0")]),s._v("版本中，样式覆盖的代码应该是下面这段：")]),s._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* MathJax v2.7.0 from 'cdn.bootcss.com' */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".MathJax")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".MathJax_Display")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"更多资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多资料"}},[s._v("#")]),s._v(" 更多资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.linpx.com/p/front-end-integration-mathjaxjs-configuration.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端整合 MathjaxJS 的配置笔记"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.mathjax.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mathjax 官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://mathjax-chinese-doc.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mathjax 中文文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);