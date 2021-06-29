const http = require("http")
const server = http.createServer()

server.on('request', (req,res) =>{
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('this is response message \n from local')
    res.end('<h2>Goodbye</h2>')

})

server.listen(8080, () => { console.log('server is running...') })