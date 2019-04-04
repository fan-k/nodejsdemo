



const user = require('./users')

module.exports = (app) =>{
    app.use('/user',user)
}