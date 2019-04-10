//引用express
var express = require('express')
//实例express
var app = express()
//数据库
// var db = require('./config/db')
const index_router = require('./app/routes/index')
// const error_router = require('./app/routes/error')
const main_router = require('./app/routes/main')


//body-parser 中间解析组件  不适用无法适用req.body读取数据
var bodyParser  = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//跨域访问设置

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
//链接数据库
// db.connect()

//主页
app.use('/',index_router)
// //路由分发至各个主路由
main_router(app)




//设置端口
app.listen(3000)
console.log('express-blog server started on: ' + 3000)

module.exports = app
