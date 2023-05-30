const express=require("express")
const app=express()
const bodyParser=require("body-parser")
app.use(express.json())
app.use(bodyParser.json())
//import mongo
const Connect=require("./Config/mongos")
Connect()

//import rhe router page
const router=require("./Config/routes")
app.use(router)//use the router using app
port=8000

app.listen(port,()=>{
    console.log("server conncetd to the port",port)
})

