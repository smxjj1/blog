(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{743:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("最近读了 koa 的源码，理清楚了架构设计与用到的第三方库。本系列将分为 3 篇，分别介绍 koa 的架构设计和 3 个核心库，最终会手动实现一个简易的 koa。")])]),t._v(" "),a("p",[t._v("koa 的实现都在仓库的"),a("code",[t._v("lib")]),t._v("目录下，如下图所示，只有 4 个文件：")]),t._v(" "),a("p",[t._v("对于这四个文件，根据用途和封装逻辑，可以分为 3 类：req 和 res，上下文以及 application。")]),t._v(" "),a("h2",{attrs:{id:"req-和-res"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#req-和-res"}},[t._v("#")]),t._v(" req 和 res")]),t._v(" "),a("p",[t._v("对应的文件是："),a("code",[t._v("request.js")]),t._v(" 和 "),a("code",[t._v("response.js")]),t._v("。分别代表着客户端请求信息和服务端返回信息。")]),t._v(" "),a("p",[t._v("这两个文件在实现逻辑上完全一致。对外暴露都是一个对象，对象上的属性都使用了"),a("code",[t._v("getter")]),t._v("或"),a("code",[t._v("setter")]),t._v("来实现读写控制。")]),t._v(" "),a("h2",{attrs:{id:"上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文"}},[t._v("#")]),t._v(" 上下文")]),t._v(" "),a("p",[t._v("对应的文件是："),a("code",[t._v("context.js")]),t._v("。存了运行环境的上下文信息，例如"),a("code",[t._v("cookies")]),t._v("。")]),t._v(" "),a("p",[t._v("除此之外，因为"),a("code",[t._v("request")]),t._v("和"),a("code",[t._v("response")]),t._v("都属于上下文信息，所以通过"),a("code",[t._v("delegate.js")]),t._v("库来实现了对"),a("code",[t._v("request.js")]),t._v("和"),a("code",[t._v("response.js")]),t._v("上所有属性的代理。例如以下代码：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Response delegation.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attachment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Request delegation.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acceptsLanguages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acceptsEncodings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("使用代理的另外一个好处就是：更方便的访问 req 和 res 上的属性。比如在开发 koa 应用的时候，可以通过"),a("code",[t._v("ctx.headers")]),t._v("来读取客户端请求的头部信息，不需要写成"),a("code",[t._v("ctx.res.headers")]),t._v("了（这样写没错）。")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：req 和 res 并不是在"),a("code",[t._v("context.js")]),t._v("中被绑定到上下文的，而是在"),a("code",[t._v("application")]),t._v("被绑定到上下文变量"),a("code",[t._v("ctx")]),t._v("中的。原因是因为每个请求的 req/res 都不是相同的。")]),t._v(" "),a("h2",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),a("p",[t._v("对应的文件是: "),a("code",[t._v("application.js")]),t._v("。这个文件的逻辑是最重要的，它的作用主要是：")]),t._v(" "),a("ul",[a("li",[t._v("给用户暴露服务启动接口")]),t._v(" "),a("li",[t._v("针对每个请求，生成新的上下文")]),t._v(" "),a("li",[t._v("处理中间件，将其串联")])]),t._v(" "),a("h3",{attrs:{id:"对外暴露接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对外暴露接口"}},[t._v("#")]),t._v(" 对外暴露接口")]),t._v(" "),a("p",[t._v("使用 koa 时候，我们常通过"),a("code",[t._v("listen")]),t._v("或者"),a("code",[t._v("callback")]),t._v("来启动服务器：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listen启动")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// callback启动")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这两种启动方法是完全等价的。因为"),a("code",[t._v("listen")]),t._v("方法内部，就调用了"),a("code",[t._v("callback")]),t._v("，并且将它传给"),a("code",[t._v("http.createServer")]),t._v("。接着看一下"),a("code",[t._v("callback")]),t._v("这个方法主要做了什么：")]),t._v(" "),a("ol",[a("li",[t._v("调用"),a("code",[t._v("koa-compose")]),t._v("将中间件串联起来（下文再讲）。")]),t._v(" "),a("li",[t._v("生成传给"),a("code",[t._v("http.createServer()")]),t._v("的函数，并且返回。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("http.createServer")]),t._v("传给函数参数的请求信息和返回信息，都被这个函数拿到了。并且传给"),a("code",[t._v("createContext")]),t._v("方法，生成本次请求的上下文。")]),t._v(" "),a("li",[t._v("将生成的上下文传给第 1 步生成的中间件调用链，"),a("strong",[t._v("这就是为什么我们在中间件处理逻辑的时候能够访问**")]),a("code",[t._v("ctx")]),t._v("**")])]),t._v(" "),a("h3",{attrs:{id:"生成新的上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成新的上下文"}},[t._v("#")]),t._v(" 生成新的上下文")]),t._v(" "),a("p",[t._v("这里上下文的方法对应的是"),a("code",[t._v("createContext")]),t._v("方法。这里我觉得更像语法糖，是为了让 koa 使用者使用更方便。比如以下这段代码：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.request 是 request.js 暴露出来的对象，将其引用保存在context.request中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户可以直接通过 ctx.属性名 来访问对应属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个req是本次请求信息，是由 http.createServer 传递给回调函数的")]),t._v("\ncontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("读到这里，虽然可以解释 "),a("code",[t._v("context.headers")]),t._v(" 是 "),a("code",[t._v("context.request.headers")]),t._v(" 的语法糖这类问题。但是感觉怪怪的。就以这个例子，context.headers 访问的是 context.request 上的 headers，而不是本次请求信息上的"),a("code",[t._v("headers")]),t._v("。本次请求信息挂在了"),a("code",[t._v("context.req")]),t._v("上。")]),t._v(" "),a("p",[t._v("让我们再回到"),a("code",[t._v("reqeust.js")]),t._v("的源码，看到了"),a("code",[t._v("headers")]),t._v("的 getter 实现：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("所以，"),a("code",[t._v("context.request.headers")]),t._v(" 就是 "),a("code",[t._v("context.request.req.headers")]),t._v("。而前面提及的"),a("code",[t._v("createContext")]),t._v("方法中的逻辑，"),a("code",[t._v("context.reqest")]),t._v("上的"),a("code",[t._v("req")]),t._v("属性就是由"),a("code",[t._v("http")]),t._v("模块函数传来的真实请求信息。 "),a("strong",[t._v("感谢 "),a("strong",[a("a",{attrs:{href:"https://github.com/theniceangel",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("@theniceangel")]),a("OutboundLink")],1)]),t._v(" 的评论指正")]),t._v("。")]),t._v(" "),a("p",[t._v("可以看到，koa 为了让开发者使用方便，在上下文上做了很多工作。")]),t._v(" "),a("h3",{attrs:{id:"中间件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件机制"}},[t._v("#")]),t._v(" 中间件机制")]),t._v(" "),a("p",[t._v("中间件的设计是 koa 最重要的部分，实现上用到了"),a("code",[t._v("koa-compose")]),t._v("库来串联中间件，形成“洋葱模型”。关于这个库，放在第二篇关于 koa 核心库的介绍中说明。")]),t._v(" "),a("p",[t._v("application 中处理中间件的函数是"),a("code",[t._v("use")]),t._v("和"),a("code",[t._v("handleRequest")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("use")]),t._v("函数：传入"),a("code",[t._v("async/await")]),t._v("函数，并将其放入 application 实例上的"),a("code",[t._v("middleware")]),t._v("数组中。如果传入是 generator，会调用"),a("code",[t._v("koa-conver")]),t._v("库将其转化为"),a("code",[t._v("async/await")]),t._v("函数。")]),t._v(" "),a("li",[a("code",[t._v("handleRequest(ctx, fnMiddleware)")]),t._v("函数：传入的"),a("code",[t._v("fnMiddleware")]),t._v("是已经串联好的中间件，函数所做的工作就是再其后再添加一个返回给客户端的函数和错误处理函数。返回给客户端的函数其实就是"),a("code",[t._v("respond")]),t._v("函数，里面通过调用"),a("code",[t._v("res.end()")]),t._v("来向客户端返回信息，整个流程就走完了。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);