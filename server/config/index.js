'use strict'

var config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3355,
    mongo:{
        uri:`mongodb://localhost/lydia-blog`
    }
}
module.exports = config