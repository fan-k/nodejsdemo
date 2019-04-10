



const user = require('./users')
const activity = require('./activity')

module.exports = (app) =>{
    app.use('/user',user)
    app.use('/activity',activity)
}