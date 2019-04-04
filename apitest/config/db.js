const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/apitest'


exports.connect = () => {
    mongoose.connect(dbUrl,{ useNewUrlParser: true }, (err) => {
        if(err){

            console.log('数据库连接失败'+ err)
        }else{
            console.log('数据库连接成功')
        }
    })
}