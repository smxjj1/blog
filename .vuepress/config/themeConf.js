const { getSidebar } = require("./../../bin/sidebar");

module.exports = {
    repo: "dongyuanxin/blog",
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    nav: [
        {
            text: "技能图谱",
            link: "/notes/"
        },
        {
            text: "前端图谱",
            link: "https://xxoo521.com/frontend/"
        },
        {
            text: "算法题解",
            link: "https://xxoo521.com/algorithm/"
        }
    ],
    sidebar: getSidebar()
};
