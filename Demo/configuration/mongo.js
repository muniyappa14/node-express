//basic mongodb connectivity
const mongoose=require("mongoose")
 const mongo=()=>{
    mongoose.connect("mongodb://localhost:27017")
    //inbuilt default promise method
            .then(()=>{
                console.log("connected to mongo server")
            })
            .catch((err)=>{
                console.log(err)
            })
}
module.exports = mongo
//exports the function 