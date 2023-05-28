const mongoose=require("mongoose")
let Schema=mongoose.Schema
const userdb=new Schema({
    name:{type:String,required:[true,"pls enter the name"]},
    email:{type:String,required:[true,"enter the email"]}
})
let userdata=mongoose.model("userdata",userdb)
module.exports=userdata
