const express=require("express")
const routes=express.Router()
let a={}

routes.get("/user",(req,res)=>{
    res.json("hello user")
})
routes.get("/home",(req,res)=>{
    res.send("welcome home")
})
routes.post("/insert",(req,res)=>{
    let c=req.body
    a.push(c)
    res.send(a)
})

module.exports=routes
