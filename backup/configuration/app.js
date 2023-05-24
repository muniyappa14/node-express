//this es5 method to get express(require method)
const express=require('express')

const app=express()
const port=8080
const emp=[
    {"id":100,name:"muni"}
]

//creating api using express

app.get('/home',(req,res)=>{
    res.send(emp)
})
app.get('/service',(req,res)=>{
    res.send("welcome service")
})
app.get('/contact',(req,res)=>{
    res.send("welcome contact")
})
app.listen(port,()=>{
    console.log("server started")
})

