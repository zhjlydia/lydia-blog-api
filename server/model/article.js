/**
 * 文章表
 */
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	author_id:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		unique: true
	},
	content: String,
	//存储文章所用到的图片
	images: {
		type: Array
	},
	tags: [{
		type: Schema.Types.ObjectId,
		ref: 'Tag'
	}],
	visit_count: {
		type: Number,
		default: 1
	},
	comment_count: {
		type: Number,
		default: 0
	},
	like_count: {
		type: Number,
		default: 1
	},
	status: { //0:草稿 1:发布
		type: Number,
		default: 0
	},
	created_time: {
		type: Date,
		default: Date.now
	},
	publish_time: {
		type: Date,
		default: Date.now
	},
	updated_time: {
		type: Date,
		default: Date.now
	}
});
module.exports = mongoose.model('Article',ArticleSchema)