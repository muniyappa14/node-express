const express=require("express")
const mongo =require("./configuration/database")
const app=express()
const port=8000

mongo()

app.listen(port,()=>{
    console.log("server is running on ",port)
})
