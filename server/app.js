
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const mongoose = require('mongoose');
const Koa=require("koa");
const app=new Koa();
const config=require("./config/index");

mongoose.connect(config.mongo.uri, function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});
app.listen(config.port,()=>{
    console.log('The server is running at http://localhost:' + config.port);
})

