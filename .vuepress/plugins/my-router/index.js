module.exports = {
    // 文章路径增加前缀 和 评论标识
    extendPageData($page) {
        const { frontmatter, regularPath } = $page;

        if (/^\/?notes\//.test(regularPath)) {
            frontmatter.comment = false;
        }
        if (/^\/?docs\//.test(regularPath)) {
            frontmatter.comment = true;
            frontmatter.commentid = frontmatter.permalink;
            frontmatter.permalink = `/passages/${frontmatter.permalink}`;
        }
    }
};
