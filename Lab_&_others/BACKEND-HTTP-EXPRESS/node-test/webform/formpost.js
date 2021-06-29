const http = require("http")
const fs = require("fs")

let formpostHTML = fs.readFileSync('./formpost.html')

http.createServer((req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', () => {
        body = decodeURI(body)  //ทำให้ภาษาไทยไม่เป็นภาษาต่างดาว 
        console.log('Body : ' + body)
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<p>` + body + `</p><hr>`)
        res.end(formpostHTML)
    })
}).listen(8080, () => console.log("Server start..."));