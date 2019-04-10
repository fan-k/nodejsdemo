
var activiryModel = require('../models/activity')

class activityController{
    async register(req,res){
        //注册一个活动
        
    }

    async index(req,res){
        //记录用户ID
        // let user_id = req.body.user_id
        //根据ID从批次表中查询数据 若无 根据权重算法 生成批次表
        activiryModel.index(function(req,status){
            if(status == 1){
                res.json({
                code : 200,
                msg:"获取成功",
                data:req,
                })
            }else{
                activiryModel.insert(function(req,status){
                    console.log('aaaa' + req +'ssss' + status)
                    if(status == 1)
                    res.json({
                        code : 200,
                        msg:"获取成功",
                        data:req,
                        })
                        //  this.index()
                    else{
                        res.json({
                            code : 200,
                            msg:"获取失败"
                            })
                    }
                })
            }
        })
        // activiryModel.index(function(req,status){
        //     if(status == 0){
        //         res.json({
        //             code : 0,
        //             msg:"失败",
        //             data:req,
        //         })
        //     }else{
        //         res.json({
        //             code : 200,
        //             msg:"获取成功",
        //             data:req,
        //         })
        //     }
        // })

        
        //根据权重算法 生成批次表
    }
    async userinfo(req,res){

    }
    async event(req,res){
        
    }
    async prizelist(req,res){

    }
}
module.exports = new activityController()