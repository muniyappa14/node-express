const express=require("express")//import express
const routes=express.Router()//for creating routes using router method
const usercontrol=require("../app/controller/usercontrol")
routes.get("/user",(req,res)=>{
    res.json("user page")
})
routes.get("/create",usercontrol.create
)
module.exports=routes


