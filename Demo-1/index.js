const express=require("express")
const mongo=require("./Configuration/mongo")//importing from another page(mongo.js)
const routes=require("./Configuration/routes")//import routes routes page 
const app=express()//for all the xepress methods
const port=8000
mongo()
app.use("/api",routes)
app.listen(port,()=>{
    console.log("connected to",port)
})