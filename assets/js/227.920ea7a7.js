(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{782:function(a,l,v){"use strict";v.r(l);var e=v(12),s=Object(e.a)({},(function(){var a=this,l=a.$createElement,v=a._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[v("strong",[a._v("MySQL 的主从一致是通过 binlog 复制实现的。")])]),a._v(" "),v("p",[a._v("关于 binlog 复制可以从这三个方面来把握：")]),a._v(" "),v("ol",[v("li",[a._v("binlog 复制机制")]),a._v(" "),v("li",[a._v("binlog 复制延迟")]),a._v(" "),v("li",[a._v("异步、半同步、MGR")])]),a._v(" "),v("p",[v("strong",[a._v("什么是 binlog？")]),a._v('\nbinlog 叫做归档日志，是 mysql 提供的，所有的存储引擎都可以使用这个日志，追加写，日志文件会不断增大，在数据备份时我们就会用到这个文件，binlog 只提供归档能力，binlog 日志包含了引起或可能引起数据库改变(如 delete 语句但没有匹配行)的事件信息，但绝不会包括 select 和 show 这样的查询语句。语句以"事件"的形式保存，所以包含了时间、事件开始和结束位置等信息。')]),a._v(" "),v("h2",{attrs:{id:"binlog-复制机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#binlog-复制机制"}},[a._v("#")]),a._v(" "),v("strong",[a._v("binlog 复制机制")])]),a._v(" "),v("p",[a._v("master 处理请求时，写入 binlog。")]),a._v(" "),v("p",[a._v("binlog 的内容发给 slave。")]),a._v(" "),v("p",[a._v("slave 按照内容写入 relay log。再从 relay log 读出，重放 SQL 语句。达成在 slave 上重做一遍 master 操作的效果。")]),a._v(" "),v("h2",{attrs:{id:"binlog-复制延迟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#binlog-复制延迟"}},[a._v("#")]),a._v(" "),v("strong",[a._v("binlog 复制延迟")])]),a._v(" "),v("p",[a._v("slave 是晚于 master 的。在 slave 上执行"),v("code",[a._v("show slave status")]),a._v("就能看到有多少延迟。")]),a._v(" "),v("p",[a._v("很多情况都会造成延迟，列举些常见的场景：")]),a._v(" "),v("ul",[v("li",[a._v("slave 用的机器本身比 master 差")]),a._v(" "),v("li",[a._v("为了不影响线上业务，运营系统的统计类 SQL 会放在 slave 上，造成 slave 压力更大")]),a._v(" "),v("li",[a._v("大表 DDL、一次性大量 DELETE")]),a._v(" "),v("li",[a._v("slave 的并行度低")])]),a._v(" "),v("p",[a._v("延迟意味着 master 和 slave 上数据不一致。对读写分离和主从切换都会有影响。")]),a._v(" "),v("h2",{attrs:{id:"异步复制、半同步复制、mgr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步复制、半同步复制、mgr"}},[a._v("#")]),a._v(" "),v("strong",[a._v("异步复制、半同步复制、MGR")])]),a._v(" "),v("p",[a._v("MySQL 5.5 之前是异步复制。master 将 binlog 中的事务异步地发给 slave，不会等待 slave 的应答。")]),a._v(" "),v("p",[a._v("5.5 引入了半同步复制。master 将事务发给 slave 后，slave 写 relay log，master 要等 slave 返回一个 ack 后，才能确认成功。由于 slave 上只是写到 relay log 就返回 ack 了，所以这个应答我们认为是很快的。当然，这里 master 要等待 slave 的 ack，如果 ack 迟迟没有，超过阈值后就会退回到异步复制。所以称作“"),v("strong",[a._v("半")]),a._v("同步复制”。")]),a._v(" "),v("p",[a._v("MySQL 5.7 引入了 MGR，即组复制。多个节点共同组成一个复制组，读写事务要经过大多数节点一致后才会提交，而不是发起方说了算。")]),a._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/arkblue/article/details/39484071",target:"_blank",rel:"noopener noreferrer"}},[a._v("mysql binlog 复制"),v("OutboundLink")],1)])])}),[],!1,null,null,null);l.default=s.exports}}]);