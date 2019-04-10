/**
 * model
 * 
 */

 const mysql = require('mysql')

 var lianjie = mysql.createConnection({
    host:'47.104.198.112',
    user:'root',
    password:'5tgbhuYTGB',
    port:'3306',
    database:'adm',
 })
 lianjie.connect()

 var sql = 'INSERT INTO activity_batch (id,batch_no,activity_id,ad_id) values (1,1,1,1)'
 lianjie.query(sql,function(error,result){
     if(error)console.log('error' + error)
     else
        console.log('success' + result)
 })

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const userSchema = new Schema({
//     user_id :Number,
//     user_name :String,
// })
// console.log('userschema'+ userSchema)
// //建立索引 提高查询效率
// userSchema.index({user_id:1})
// const userinfo = mongoose.model('userinfo',userSchema)

// module.exports = userinfo