(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{776:function(t,a,_){"use strict";_.r(a);var v=_(12),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("这是阅读《MongoDB 实战》所做的，关于索引、复制和分片方面的读书笔记。")])]),t._v(" "),_("h2",{attrs:{id:"索引与查询优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引与查询优化"}},[t._v("#")]),t._v(" 索引与查询优化")]),t._v(" "),_("p",[t._v("查询是非常高频的操作，大数据、高频读的场景下，查询的效率会是性能的瓶颈。设置"),_("strong",[t._v("合适的索引")]),t._v("，可以充分利用数据结构（B 数）和物理硬件的优势。")]),t._v(" "),_("h3",{attrs:{id:"_1-索引理论"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引理论"}},[t._v("#")]),t._v(" 1. 索引理论")]),t._v(" "),_("h4",{attrs:{id:"复合索引和分离索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复合索引和分离索引"}},[t._v("#")]),t._v(" 复合索引和分离索引")]),t._v(" "),_("p",[t._v("一个查询中，要是有多个字段，比如 2 个字段。分离索引是：查找每个索引的匹配集合，取得这些匹配集合的交集。复合索引是：逐步根据索引的顺序做查询。")]),t._v(" "),_("p",[t._v("比如有一个食谱，我们根据种类和菜名来做索引：")]),t._v(" "),_("div",{staticClass:"language-yml line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-yml"}},[_("code",[t._v("肉类\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 辣子鸡：第12页\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 鱼肉：第139页\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("⚠️：复合索引中的顺序是非常重要的，如果设置的索引不合适，那么就相当于现行扫描文档。抽象来说，如果有一个针对 a-b 的复合索引，那么仅针对 a 的索引就是冗余的。比如例子中，仅针对种类的索引就是冗余的，但是种类索引可以降低扫描时间（和 Btree 有关）。")]),t._v(" "),_("h4",{attrs:{id:"索引效率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引效率"}},[t._v("#")]),t._v(" 索引效率")]),t._v(" "),_("p",[t._v("正确的索引，也不一定会有快速的查询："),_("strong",[t._v("索引和数据集无法全部放入内存")]),t._v("。")]),t._v(" "),_("p",[t._v("如果内存充足，所有使用的数据文件都会载入内存，对应内存发生变化时（比如写操作），结果会异步刷到磁盘上。")]),t._v(" "),_("p",[t._v("如果内存不足，就无法全部装入内存，出现"),_("strong",[t._v("页错误")]),t._v("，操作系统会频繁访问磁盘读取需要数据。数据集过大时候，任何写操作都要去磁盘，会出现"),_("strong",[t._v("颠簸情况")]),t._v("，性能下滑。")]),t._v(" "),_("p",[t._v("因此，应该首先保证"),_("strong",[t._v("索引都能装入内存")]),t._v("，复合索引时，尽量减少键的数量。")]),t._v(" "),_("h4",{attrs:{id:"b-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B 树")]),t._v(" "),_("p",[t._v("在 Mongo Version2 中，B 树仅用于索引。集合存储是双向列表。")]),t._v(" "),_("p",[t._v("对于复合索引的底层结构，以下面为例，是根据姓、名和生日来建立的复合索引。如果要查询(Akroyd, Kirsten, 1978-11-02)的数据，那么会先按照顺序查找，根据第一个索引，找到了只有左侧两个复合要求；再在左侧两个集合中查找第二个索引；直到找到符合要求的数据为止。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g7u32bzv1kj30zg0n74bf.jpg",alt:"image-20191011110751982"}})]),t._v(" "),_("p",[t._v("参考链接：")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.zhihu.com/question/268703288",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql 复合索引的底层数据结构？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/nullzx/p/8729425.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("B 树和 B+树的插入、删除"),_("OutboundLink")],1)])]),t._v(" "),_("h3",{attrs:{id:"_2-索引实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引实践"}},[t._v("#")]),t._v(" 2. 索引实践")]),t._v(" "),_("h4",{attrs:{id:"索引类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引类型"}},[t._v("#")]),t._v(" 索引类型")]),t._v(" "),_("p",[t._v("根据索引设置时的属性的不同，常见的有：唯一性索引、稀疏索引和多键索引。")]),t._v(" "),_("p",[_("strong",[t._v("唯一性索引")])]),t._v(" "),_("p",[t._v("说明：被设置为索引的字段，不能重复出现，否则会报错。")]),t._v(" "),_("p",[t._v("创建方式："),_("code",[t._v("db.col.createIndex({name: 1}, {unique: true})")]),t._v("。")]),t._v(" "),_("p",[t._v("⚠️：适用于插入数据前先创建索引的情况")]),t._v(" "),_("h4",{attrs:{id:"稀疏索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#稀疏索引"}},[t._v("#")]),t._v(" 稀疏索引")]),t._v(" "),_("p",[t._v("说明：索引默认是密集型的，是指为集合中每个文档都建立索引。例如前面的例子，即使文档没有 name 字段，那么查询索引时候，没有 name 字段的文档匹配 null 即可。")]),t._v(" "),_("p",[t._v("创建方式："),_("code",[t._v("db.col.createIndex({name: 1}, {sparse: true})")])]),t._v(" "),_("p",[t._v("优点：")]),t._v(" "),_("ul",[_("li",[t._v("占用较少的空间")]),t._v(" "),_("li",[t._v("适用于不是为所有文档增加唯一性索引")]),t._v(" "),_("li",[t._v("适用于历史遗留的文档，无法保证字段存在")])]),t._v(" "),_("h4",{attrs:{id:"多键索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多键索引"}},[t._v("#")]),t._v(" 多键索引")]),t._v(" "),_("p",[t._v("说明：在数组字段上建立索引。mongo 中，多键索引是默认开启的。")]),t._v(" "),_("p",[t._v("原理：数组中每个元素，都指向文档。")]),t._v(" "),_("h3",{attrs:{id:"_3-查询管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-查询管理"}},[t._v("#")]),t._v(" 3. 查询管理")]),t._v(" "),_("h4",{attrs:{id:"构建索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建索引"}},[t._v("#")]),t._v(" 构建索引")]),t._v(" "),_("p",[t._v("分为为索引值排序、排序值插入索引中，并且会占用写锁，其他程序无法读写数据库。")]),t._v(" "),_("p",[t._v("在迁移历史数据和索引的时候，先迁移数据再构建集合，比线构建集合再迁移数据 的做法更优秀。")]),t._v(" "),_("h4",{attrs:{id:"后台索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后台索引"}},[t._v("#")]),t._v(" 后台索引")]),t._v(" "),_("p",[t._v("设置 background 为 true。虽然仍会占用写锁，但会停下来，让其他操作读写操作访问数据库。适合在流量最低的时候，完成索引构建。")]),t._v(" "),_("h4",{attrs:{id:"备份"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),_("p",[t._v("mongodump 和 mongorestore 只能保存集合和索引说明。")]),t._v(" "),_("p",[t._v("如果想备份索引，必须直接备份 mongo 的数据文件。")]),t._v(" "),_("h4",{attrs:{id:"压紧删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#压紧删除"}},[t._v("#")]),t._v(" 压紧删除")]),t._v(" "),_("p",[t._v("对于删除大量数据，可能造成索引碎片化。解决方法是重建索引或者执行"),_("code",[t._v("db.col.reIndex()")]),t._v(".")]),t._v(" "),_("p",[t._v("应该在子节点执行此命令，再进行节点替换，因为它会占用写锁，造成无法读写操作。")]),t._v(" "),_("h3",{attrs:{id:"_4-查询优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-查询优化"}},[t._v("#")]),t._v(" 4. 查询优化")]),t._v(" "),_("p",[t._v("两个比较重要的原理，一个是"),_("strong",[t._v("覆盖索引")]),t._v("，一个"),_("strong",[t._v("复合键的顺序")]),t._v("。")]),t._v(" "),_("p",[t._v("覆盖索引是指：查询的关键字和索引完全一致。")]),t._v(" "),_("p",[t._v("复合键的顺序遵循：搜索成本由低到高的原则排列。")]),t._v(" "),_("h2",{attrs:{id:"复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[t._v("#")]),t._v(" 复制")]),t._v(" "),_("h3",{attrs:{id:"_1-复制概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-复制概述"}},[t._v("#")]),t._v(" 1. 复制概述")]),t._v(" "),_("p",[t._v("定义：在多台服务器上分布并管理数据库服务器。有 2 种复制风格：主从复制和副本集（生产环境推荐）。")]),t._v(" "),_("p",[t._v("复制的作用是"),_("strong",[t._v("冗余")]),t._v("，因为复制是"),_("strong",[t._v("异步的")]),t._v("，因此任何节点的延迟都不会影响主节点性能。")]),t._v(" "),_("p",[t._v("副本不是备份替代品：备份是某事刻的快照；副本是最新的。")]),t._v(" "),_("p",[t._v("作用：故障转移、均衡读负载。")]),t._v(" "),_("h3",{attrs:{id:"_2-副本集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-副本集"}},[t._v("#")]),t._v(" 2. 副本集")]),t._v(" "),_("p",[t._v("最小的副本集由 3 个节点组成：主节点、从节点、仲裁节点。主从节点是一等的；仲裁节点不复制数据，中立观察。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g7uawc9w17j30mk0j0qbw.jpg",alt:"image-20191011153854119"}})]),t._v(" "),_("p",[t._v("副本集基于两个机制：oplog 和心跳。oplog 是记录数据的变更；心跳是检测主节点是否有效。")]),t._v(" "),_("p",[t._v("在副本集中，「提交」是指：数据变动都被复制到从节点。否则就是未提交。")]),t._v(" "),_("h3",{attrs:{id:"_3-主从复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-主从复制"}},[t._v("#")]),t._v(" 3. 主从复制")]),t._v(" "),_("p",[t._v("不推荐，副本集才是正道，原因如下：")]),t._v(" "),_("ul",[_("li",[t._v("故障转移手动操作（没有仲裁节点）")]),t._v(" "),_("li",[t._v("oplog 近存在主节点，恢复苦难")])]),t._v(" "),_("h3",{attrs:{id:"_4-写关注和读拓展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-写关注和读拓展"}},[t._v("#")]),t._v(" 4. 写关注和读拓展")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/write-concern/",target:"_blank",rel:"noopener noreferrer"}},[t._v("写关注"),_("OutboundLink")],1),t._v("：设置"),_("code",[t._v("writeConcern")]),t._v("参数，通过属性设置来指定 wtimeout、w。")]),t._v(" "),_("p",[t._v("读拓展：单台服务器无法承受程序的读负载，将查询分配到副本上。")]),t._v(" "),_("h2",{attrs:{id:"分片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分片"}},[t._v("#")]),t._v(" 分片")]),t._v(" "),_("p",[t._v("这是一个有意思的概念，尤其是「复制」对比的时候。复制是指数据都保存在单机上，向其他副本迁移，理论上所有主从节点数据是一致的；分片是指由于空间有限，单机承受不了数据量，同一个数据库分布在不同的数据库上，这些数据库形成了一个宏观意义上的节点。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g7ubh0y9azj30r20l6q8y.jpg",alt:"image-20191011155847647"}})]),t._v(" "),_("p",[t._v("值得称赞的是，mongo 提供分片机制，无需变动代码。")]),t._v(" "),_("h2",{attrs:{id:"最后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),_("p",[t._v("作为中前台开发，开发中几乎接触不到复制、分片和部署的逻辑。专业事还得交给专业的人来做，毕竟每个人精力有限，不能面面俱到。但了解复制和分片的原理，有助于加深对 mongo 的理解，也可能会在以后做架构的时候发挥作用。")]),t._v(" "),_("p",[_("strong",[t._v("完！")])])])}),[],!1,null,null,null);a.default=r.exports}}]);