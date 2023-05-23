//es5 method
const express=require('express')
const app=express()
const port=3000
app.get('/home',(req,res)=>{
    res.send("home page")
})
app.get('/service',(req,res)=>{
    res.json("service page")
})

//listen is used to provide port number
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})