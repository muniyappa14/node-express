//Express
let express=require("express")
const app=express()
const port=2585
const employee=[{id:100,name:"muni"},
                 {id:101,name:"chiru"}]

                 app.get('/',(request,response)=>{
                    response.send(employee)
                 })
//listen is used for run the port
app.listen(port,()=>{
    console.log("server runner on port",port)
})


app.get('/',(request,response)=>{
    response.send('welcome to the website')
})