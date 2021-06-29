const http = require('http');

function app(req,res) {
    console.log('request coming')
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello')
    res.end()
}

http.createServer(app).listen(8080)