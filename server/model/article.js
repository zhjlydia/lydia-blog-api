/**
 * 文章表
 */
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    content: String,
    //存储文章所用到的图片
    images: {
        type: Array
    },
	tags:[{
	  type: Schema.Types.ObjectId,
	  ref: 'Tag'
	}],
	visit_count:{
		type:Number,
		default:1
	},
	comment_count:{
		type:Number,
		default:0
	},
	like_count:{
		type:Number,
		default:1
	},
});