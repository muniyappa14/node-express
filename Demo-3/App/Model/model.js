
const mongoose=require("mongoose")
const email=require("validator/lib/isEmail")//import validator package
const userschema= new mongoose.Schema({
    name:{
        type:String
        },
    email:{
        type:String,
        validate:{
            //validate is an object 
            //two keys for validate and show error msg
            validator:function(value){
                return email(value)
            },
            message:function(){
               return "enter valid email"
            }
        
        }
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        maxlength:128
    }
    
})


const usermodel=mongoose.model("usermodel",userschema)
module.exports=usermodel
