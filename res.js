const http = require ('http')
http.createServer((req,res)=>{
    res.write("DHANUSH");
    res.end();
    console.log("server running")
}).listen(8000)



