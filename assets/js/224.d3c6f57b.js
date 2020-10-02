(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{791:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"乐观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[t._v("#")]),t._v(" 乐观锁")]),t._v(" "),a("p",[t._v("乐观锁认为一般情况下数据不会造成冲突（所以叫“乐观”），所以在数据进行提交更新时才会对数据的冲突与否进行检测。")]),t._v(" "),a("p",[t._v("它本身是种程序设计思想，"),a("strong",[t._v("通过一种标识来决定数据是否可以操作")]),t._v("。")]),t._v(" "),a("p",[t._v("现在普遍的做法是给数据加一个版本号或者时间戳的方式来实现乐观锁操作过程。例如新增一个version字段，更新的时候：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("version\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"悲观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[t._v("#")]),t._v(" 悲观锁")]),t._v(" "),a("p",[t._v("悲观锁获取数据都会认为数据可能被修改。在获取数据的时候会加锁，确保使用过程不会被修改。")]),t._v(" "),a("p",[t._v("也是程序设计的思想。例如线程读写数据加锁，其他线程等待锁释放，才可以操作数据。")]),t._v(" "),a("h2",{attrs:{id:"异同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异同点"}},[t._v("#")]),t._v(" 异同点")]),t._v(" "),a("ol",[a("li",[t._v("都是程序设计的思想，通过数据库字段/代码层面来控制，并非数据库自身的锁")]),t._v(" "),a("li",[t._v("乐观锁适合读频繁场景；悲观锁适合写频繁场景。")])]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://xie.infoq.cn/article/4e7de8ce0607bfbe24a5c2e16",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库的乐观锁和悲观锁并非真实的锁"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);