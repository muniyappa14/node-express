const mongoose=require("mongoose")
const mongo=()=>{
    mongoose.connect("mongodb://localhost:27017/user")
             .then(()=>{
                console.log("connected to user")
             })
             .catch((error)=>{
                console.log(error)
             })
}

module.exports=mongo