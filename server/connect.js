
const mongoose = require('mongoose');
const config=require("./config/index");
const path=require("path");
const fs=require("fs");

mongoose.connect(config.mongo.uri,{useMongoClient: true}, function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});

const modelPath=path.join(__dirname,'model');

fs.readdirSync(modelPath).forEach(file=>{
    require(modelPath + '/' + file);
})
module.exports = mongoose



