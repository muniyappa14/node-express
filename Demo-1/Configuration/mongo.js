const mongoo=require("mongoose")
const mongo=()=>{
    mongoo.connect("mongodb://localhost:27017/table")
           .then(()=>{
            console.log("connected to database")
           })
           .catch((err)=>{
            console.log(err)
           })
}
module.exports=mongo