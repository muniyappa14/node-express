const port=8080

const http=require("http");
http.createServer((request,response)=>{
    
       
    if(request.url==='/home'){
        response.end('welcome to nodejs')
    }
    if(request.url==='/service'){
        response.end('welcome to service page')
    }
}).listen(port)
