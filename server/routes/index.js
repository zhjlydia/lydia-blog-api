const Router = require('koa-router')()
const article = require('./api/article')

module.exports = function(app) {
  Router.use('/Article',article.routes(),article.allowedMethods())
  app.use(Router.routes())
}
