const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    fs.unlink('test.txt',(err)=>{
        if (err) throw err;
        console.log('file deleted');
    })
}).listen(8000)