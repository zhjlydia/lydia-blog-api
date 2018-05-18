/**
 * 标签分类表,管理标签
 */
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TagCategorySchema = new Schema({
	//分类名称
	name:{
		type:String,
		unique: true
	}
})

module.exports = mongoose.model('TagCategory',TagCategorySchema)