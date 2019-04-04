

const UserModel = require('../models/users')


class UserController{
    async register (req,res,next){
        let userid = req.query.userid
        let username = req.query.username
        console.log('userid'+ userid,'username'+username)
        try {
            const userinfo = {
                user_id :userid,
                user_name :username,
            }
            await UserModel.create(userinfo)
            res.json({
                code:200,
                msg:'注册成功',
                data:'注册成功',
            })
        } catch (error) {
            console.log(error)
            res.json({
                code:0,
                msg:'注册是吧',
            })
        }
    }
}

module.exports = new UserController()