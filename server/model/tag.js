/**
 * 标签表
 */
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TagSchema = new Schema({
    cid:{
		type:Schema.Types.ObjectId,
		ref:'TagCategory'
	},
	//分类名称
	name:{
		type:String,
		unique: true
	}
})

module.exports = mongoose.model('Tag',TagSchema)