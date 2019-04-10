

var util = require('util')

const mysql = require('mysql')

var lianjie = mysql.createConnection({
   host:'47.104.198.112',
   user:'root',
   password:'5tgbhuYTGB',
   port:'3306',
   database:'adm',
})
lianjie.connect()

class BaseModel{
    async databaseAction(sql,callback){
            lianjie.query(sql,function(error,result){
                if(error){
                    console.log('error' + error)
                    callback(error,0)
                } 
                else{
                    console.log('result' + result)
                    callback(result,1)
                }
            })
    }
}

module.exports = new BaseModel()

