const http = require('http');
const port = 4000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log('Roshan Shaik');
    res.end('Roshan Shaik');

})

server.listen(port);