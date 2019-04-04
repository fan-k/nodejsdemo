/**
 * model
 * 
 */

//  const mysql = require('mysql')

//  var lianjie = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Mysql123..',
//     port:'3306',
//     database:'mysqltest',
//  })
//  lianjie.connect()

//  var sql = 'SELECT * FROM prize'

//  lianjie.query(sql,function(error,result){
//      if(error)console.log(error)
//      else
//         console.log(result)
//  })

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user_id :Number,
    user_name :String,
})
console.log('userschema'+ userSchema)
//建立索引 提高查询效率
userSchema.index({user_id:1})
const userinfo = mongoose.model('userinfo',userSchema)

module.exports = userinfo
