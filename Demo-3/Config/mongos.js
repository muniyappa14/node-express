const mongoose=require("mongoose")
const Connect=()=>{
 mongoose.connect("mongodb://localhost:27017/user").then(()=>{
   console.log("connected to database")})
                                                   .catch(()=>{
                                                      console.log("error")
                                                   })
}
module.exports=Connect