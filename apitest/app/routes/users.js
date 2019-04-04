


const UserController  = require('../controllers/UserController')

const router = require('express').Router()

router.get('/register',UserController.register)

// router.get('/register',function(req,res){
//     UserController.register(req,res)
// })
module.exports = router
