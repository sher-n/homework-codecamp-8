const http = require('http');
const server = http.createServer()

server.on('request', (req,res) => {
    let {httpVersion, method} = req
    console.log("request coming...");
    console.log(req.headers);
    console.log(httpVersion);
    console.log(method)
})

server.listen(8080)