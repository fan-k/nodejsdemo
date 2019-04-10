
const Base = require('./baseModel')

class Activity{
    async index(callback){
        var sql = 'SELECT *FROM activity_batch'
        Base.databaseAction(sql,callback)
    }
    async insert(callback){
        var sql = 'INSERT INTO activity_batch (id,batch_no,activity_id,ad_id) values (3,2,2,2)'
        Base.databaseAction(sql,callback)
    }
}
module.exports = new Activity()