const http = require('http')
const fs = require('fs')
const url = require("url")

function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'conten-type': 200})
        res.write(data)
        res.end()
    })
}

http.createServer((req, res) => {
    const p_url = url.parse(req.url, true);
    console.log(p_url)

    if(req.url == '/') {
        return renderHTML('./index.html', req, res)
    }
    if(req.url == '/form') {
        return renderHTML('./form.html', req, res)
    }
    if(req.url == '/formget') {
        return renderHTML('./formget.html', req, res)
    }
    if(p_url.pathname == '/getdata') {
        res.write(`<p>We got your data</p>`)
        res.write(`<p>Your FirstName : ${p_url.query.fname}</p>`)
        res.write(`<p>Your LastName : ${p_url.query.lname}</p>`)
        return res.end()
    }
    res.writeHead(404, {'content-type': 'text/html'})
    res.write("Path not found")
    res.end()

}).listen(8080, () => console.log("server start..."))