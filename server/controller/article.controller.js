'use strict'

const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const User = mongoose.model('User')
const Comment = mongoose.model('Comment')

/**
 * @method
 * @param {Type} data 目标对象
 * @returns {Type} 运营商名称
 * @desc 前台获取文章列表
 */
exports.getFrontArticleList = async(ctx, next) => {
    let currrentPage = ctx.query.currrentPage > 0
        ? ctx.query.currrentPage
        : 1;
    let pageSize = ctx.query.pageSize > 0
        ? ctx.query.pageSize
        : 10;
    let startRow = (currrentPage - 1) * pageSize;
    let sort = ctx.query.sortType || "publish_time";
    // let condition={}; if(ctx.query.tagId){     condition={}; }
    const list = await Article
        .find()
        .select("title images tags visit_count comment_count like_count publish_time")
        .skip(startRow)
        .limit(pageSize)
        .sort(sort)

}