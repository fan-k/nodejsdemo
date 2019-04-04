//引用express
var express = require('express')
//实例express
var app = express()
//数据库
var db = require('./config/db')
const index_router = require('./app/routes/index')
// const error_router = require('./app/routes/error')
const main_router = require('./app/routes/main')


//链接数据库
db.connect()

//主页
app.use('/',index_router)
// //路由分发至各个主路由
main_router(app)
// //error
// error_router(app)

//设置端口
app.listen(3000)
console.log('express-blog server started on: ' + 3000)

module.exports = app
