const userdata=require("../model/user")
const usercontrol={}
usercontrol.create=(req,res)=>{
    res.send("user created")
}

module.exports=usercontrol