(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{713:function(e,t,r){"use strict";r.r(t);var s=r(12),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("本文从 Web 开发的角度聊聊 MVC、MVP 和 MVVM 这三种架构模式。")]),e._v(" "),r("h2",{attrs:{id:"什么是-m、v？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-m、v？"}},[e._v("#")]),e._v(" 什么是 M、V？")]),e._v(" "),r("p",[e._v("M、V 是这三种架构模式中的共同含有的部分，M 是 Model 的缩写，代表“数据模型”；V 是 View 的缩写，代表“视图”。")]),e._v(" "),r("p",[e._v("这三种架构设计中，都对 M 和 V 进行了分离，Model 掌握数据源，View 负责视图展示。而剩下的部分（MVC 中的 C、MVP 中的 P、MVVM 中的 VM），就是不同架构中对 M 与 V 之间“交互”的特色处理。")]),e._v(" "),r("h2",{attrs:{id:"mvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),r("p",[e._v("MVC 中的 C 是 Controler 的缩写，代表“控制器”，它的职责是消息处理。这里的“消息”在不同情况下，有不同的语义。在前端，消息指的是用户对于视图的操作；在后端，消息指的是来自客户端的 rest api 请求。")]),e._v(" "),r("p",[e._v("对于 View 来说，它不是和 Model 完全分离的。如果用户的操作是访问数据，那么可以在 View 中向 Model 要数据；如果用户的操作是更新数据，那么需要统一交给 可以看出，MVC 的不足是 View 和 Controler 来处理，并且 可以看出，MVC 的不足是 View 和 Controler 在处理完成后，会有机制通知 View，一般采用“观察监听”设计模式。")]),e._v(" "),r("p",[e._v("三者之间的关系如下图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gbspuq9zvwj30h40awq3s.jpg",alt:""}})]),e._v(" "),r("p",[e._v("如果想看 Nodejs 的 demo，请参考"),r("a",{attrs:{href:"https://www.cnblogs.com/SheilaSun/p/7294706.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《使用 Node.js 实现简易 MVC 框架》"),r("OutboundLink")],1),e._v("这篇文章。")]),e._v(" "),r("h2",{attrs:{id:"mvp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvp"}},[e._v("#")]),e._v(" MVP")]),e._v(" "),r("p",[e._v("可以看出，MVC 的不足是 View 和 Model 之间不是严格意义的完全分离。MVP 正是对 MVC 这一点做出了改进。")]),e._v(" "),r("p",[e._v("MVP 中的 P 是 Presenter 的缩写，代表“展示器”。所有的消息（客户端请求、用户事件）都统一交给 Presenter 来处理，由 Presenter 来向 Model 进行数据查询或者更新。而 Presenter 和 View 之间，一般会约定好接口调用的格式。")]),e._v(" "),r("p",[e._v("三者之间的关系如下图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gbspv73nyfj30h80b0753.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"mvvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),r("p",[e._v("可以看出，MVP 虽然实现了 V 和 M 的分离，但是开发者必须提前规定 P 和 V 的交互接口，对开发来说并不友好。有没有办法能够实现，当 Model 发生改变的时候，立即就下发到视图，并且实现视图更新呢？")]),e._v(" "),r("p",[e._v("MVVM 通过“双向绑定”实现了这个要求。MVVM 中的 VM 是 View Model 的缩写，代表“数据模型”。")]),e._v(" "),r("p",[e._v("前端框架 Vuejs 就使用了这种设计，使得开发者用起来非常方便。开发者只需要关注 View Model 和 Model 即可，不再需要对 View 进行显式手动操作：用户事件导致的 View 变动会自然反映在 ViewModel 上，ViewModel 中的数据操作也会自动反映在 View 上。")]),e._v(" "),r("p",[e._v("它们的关系如下图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gbsqsa790fj30ik05iwf1.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=v.exports}}]);