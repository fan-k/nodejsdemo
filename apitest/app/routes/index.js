//根页面

const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
    res.json({
        code:200,
        msg:'注册成功',
        data:'注册成功',
    })
})
module.exports = router