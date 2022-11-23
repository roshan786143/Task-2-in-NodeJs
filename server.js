const http = require('http');
const port = 4003;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    // console.log('Roshan Shaik');
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Roshan Shaik</title></head>');
    let url = res.url;
    if(url=='/home'){
    res.write('<body><h1>Welcome to Home.</h1></body>');
    }else if(url=='/about'){
        res.write('<body><h1>Welcome to About Us page.</h1></body>');
    }else{
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    }
    res.write('/<html>');
    res.write(req.url);
    res.end();

})

server.listen(port);