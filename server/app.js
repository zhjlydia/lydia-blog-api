
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const mongoose = require('mongoose');
const Koa=require("koa");
const app=new Koa();
const config=require("./config/index");
require("./connect.js");

app.listen(config.port,()=>{
    console.log('The server is running at http://localhost:' + config.port, app.env);
})

