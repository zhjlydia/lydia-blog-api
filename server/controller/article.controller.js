'use strict'

const mongoose = require('mongoose')
const MarkdownIt = require('markdown-it')
const Article = mongoose.model('Article')
const User = mongoose.model('User')
const Comment = mongoose.model('Comment')

/**
 * @method
 * @param {Object} ctx 目标对象
 * @param {Object} next 目标对象
 * @returns {Object} 文章列表
 * @desc 前台获取文章列表
 */
exports.getFrontArticleList = async(ctx, next) => {
    let pageIndex = parseInt(ctx.query.pageIndex) > 0
        ? parseInt(ctx.query.pageIndex)
        : 1;
    let pageSize = parseInt(ctx.query.pageSize) > 0
        ? parseInt(ctx.query.pageSize)
        : 10;
    let startRow = (pageIndex - 1) * pageSize;
    let sort = ctx.query.sortType || "publish_time";
    // let condition={}; if(ctx.query.tagId){     condition={}; }
    try {
        const list = await Article
            .find()
            .select("title images tags visit_count comment_count like_count publish_time")
            .skip(startRow)
            .limit(pageSize)
            .sort(sort)
            .exec()
        ctx.body = {
            data: list
        }
        ctx.status = 200
    } catch (err) {
        ctx.throw(err)
    }
}

/**
 * @method
 * @param {Object} ctx 目标对象
 * @param {Object} next 目标对象
 * @returns {Object} 文章详情
 * @desc 前台获取文章详情
 */
exports.getFrontArticleDetail = async(ctx, next) => {
    let id = ctx.param.id
    const md = new MarkdownIt({html: true})
    try {
        const result = await Article.findById(id)
        result.content = md.render(result.content)
        result.visit_count += 1
        await Article.findByIdAndUpdate(id, {
            $inc: {
                visit_count: 1
            }
        })
        ctx.status = 200
        ctx.body = {
            data: result.info
        }

    } catch (err) {
        ctx.throw(err)
    }
}