const express=require("express")
const app=express()
const port=3003
//import mongoose from npm package
const mongoose=require("mongoose")
//providing the url
mongoose.connect("mongodb://localhost:27017")
         .then(()=>{
            console.log("connected to mongodb")
         })
         .catch((err)=>{
            console.log(err)
         })
app.listen(port,()=>{
    console.log("server connected")
})
