const express=require("express")
const app=express()
const port=8080
const mongo=require("./configuration/mongo");
const routes=require("../Demo/configuration/routes")

app.use(express.json())
mongo();
app.use(routes)

app.listen(port,()=>{
    console.log("server is running on the port ",port)
});
