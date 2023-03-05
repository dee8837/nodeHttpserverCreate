const http = require('http')

// const express =require('express')

// const {get} = require('http');


// const app = express();


// app.get('/sai',(req,res)=>{
//     console.log("sai here")
// })


// app.listen(8000,()=>{
//     console.log("listining at port 8000")
// })

http.createServer (function(req,res){
    if(req.url === '/'){
        res.write("Hello world")
        console.log("Hello World")
    
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({
            error:"This page is not found"
        }));
    }

 

    res.end()
}).listen(8000,()=>{
    console.log("listen at port 8000")
})



