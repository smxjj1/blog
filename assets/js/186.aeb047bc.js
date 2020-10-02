(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{744:function(t,r,a){"use strict";a.r(r);var e=a(12),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"中文分词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文分词"}},[t._v("#")]),t._v(" 中文分词")]),t._v(" "),a("p",[t._v("对于中文的全文索引，"),a("strong",[t._v("需要借助「分词算法」，将句子拆分为词语")]),t._v("。再根据词语建立字典树。比较成熟的分词库是「jieba 分词」：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/yanyiwu/nodejieba",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs 版本"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/deepcs233/jieba_fast",target:"_blank",rel:"noopener noreferrer"}},[t._v("python 版本"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常见方法：全文索引与-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见方法：全文索引与-like"}},[t._v("#")]),t._v(" 常见方法：全文索引与 Like")]),t._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("全文索引的单位是「词语」，Like 的基本单位是字符。比如对于“我爱中国”这句话，如果是全文索引，“我”、“中国”、“爱”都可以匹配到，但是“爱中”就不行。但是对于 Like，则都可以。")]),t._v(" "),a("p",[t._v("全文索引的数据结构是一颗 Trie 树，或者基于此的延伸数据结构，比如 DAT。好处就是，搜索复杂度不取决于数据量（非常牛逼的特性），而取决于字典树的深度，而字典树的深度，取决于词语的长度。")]),t._v(" "),a("h3",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("p",[t._v("对于 Like，适合姓名、昵称、性别等此类的小字段。")]),t._v(" "),a("p",[t._v("对于全文检索，适合中长文本。")]),t._v(" "),a("h2",{attrs:{id:"其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),a("h3",{attrs:{id:"分词-内存-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分词-内存-hash"}},[t._v("#")]),t._v(" 分词+内存 hash")]),t._v(" "),a("p",[t._v("将标题文本分词后，对词语进行 hash，根据 hash 值查询对应的文章列表 docList。再对所有的分词 hash 的结果查询到的文章列表，进行交集运算。")]),t._v(" "),a("p",[t._v("在时间复杂度上，这与数据量大小无关，复杂度只与进行交集运算的结果集大小有关。优点是，纯内存操作，非常快，实现简单，容易水平扩展；缺点是，不容易持久化，需要设计相关策略，防止数据丢失。")]),t._v(" "),a("h3",{attrs:{id:"分词-dat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分词-dat"}},[t._v("#")]),t._v(" 分词+DAT")]),t._v(" "),a("p",[t._v("Trie 树的优点是，索引可以及时更新，但是内存占用大。如果对于「更新」不频繁的场景，使用 DAT 即可，它需要提前建立索引，不能实时更新。")]),t._v(" "),a("p",[t._v("⚠️ 虽然 Trie 树可以通过 hash 表方式进行优化，但是对于本例，并不能很方便地持久化。而 DAT 非常容易进行水平拓展。")]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/bobsoft/archive/2012/10/07/2714545.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("全文检索和 Like 的实现原理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/3FMZ2byF2ltSKw3oXnMzTg",target:"_blank",rel:"noopener noreferrer"}},[t._v("每秒 20W 次并发分词检索，架构如何设计？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35193582",target:"_blank",rel:"noopener noreferrer"}},[t._v("双数组前缀树（Double-Array Trie）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);