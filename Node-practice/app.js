const http=require('http');
let port=8080
const date=new Date;
const server=http.createServer(function(request,response){
    if(request.url==='/'){
        response.end("welcome to the website")
    }
    else if(request.url==="/about"){
        response.end("welcome to about page")
    }
    else if(request.url==='/user'){

        const user=[
            {id:101,name:"louis"},
            {id:102,name:"mario"},
            {id:103,name:"giri"}
        ]
       response.end( JSON.stringify(user))
    }
    else if(request.url==='/time'){
        response.end(date.toLocaleTimeString())
    }
})
server.listen(port,function(){
    console.log("server is running on port",port)
})