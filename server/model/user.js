/**
 * user表
 */
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const md5 = require('md5');

let UserSchema = new Schema({
    //名称
    nickname: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    github: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    qq: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    hashedPassword: String,
    avatar: String
})

UserSchema
    .virtual('passWord')
    .set(passWord => {
        this._passWord = passWord;
        this.hashedPassword = md5(passWord).toUpperCase()
    })
    .get(() => {
        return this._passWord
    })

UserSchema.virtual('userInfo').get(()=>{
    return {
        'nickname':this.nickname,
        'email':this.email,
        'avatar':this.avata
    }
})

UserSchema.virtual('token').get(()=>{
    return {
        '_id':this._id
    }
})

UserSchema.methods={
    //验证用户密码
    validatePassWord(text){
        return md5(text).toUpperCase()===this.hashedPassword;
    }
}

exports.UserSchema=UserSchema
module.exports = mongoose.model('User', UserSchema)