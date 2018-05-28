const router = require('koa-router')();
const controller =require('../../controller/article.controller.js');

//前台获取文章列表
router.get('/getFrontArticleList',controller.getFrontArticleList)
module.exports = router