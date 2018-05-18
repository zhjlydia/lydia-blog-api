'use strict'

const path = require('path')
const session = require('koa-generic-session')
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const json = require('koa-json')//规范请求体中json格式
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')//跨域
const passport = require('koa-passport')
const config = require('./index')

module.exports = function(app) {
  if(app.env === 'development'){
    app.use(responseTime())
    app.use(logger())
  }
  app.use(cors({
    credentials: true
  }))
  app.use(bodyParser())
  app.use(json())
  app.keys = [config.session.secrets]
  app.use(session({
    key: 'jackblog.sid',
    cookie: config.session.cookie
  }))
  app.use(passport.initialize())
  app.use(compress())
}
