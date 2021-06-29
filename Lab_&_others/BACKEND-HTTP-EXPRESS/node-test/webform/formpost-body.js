const http = require("http")
const fs = require('fs')

const formBody = require('body/form')
const postHTML = fs.readFileSync("./formpost.html")

http.createServer((req,res) => {
     if(req.url === '/') {
         return res.end(postHTML)
     }

     formBody(req,res, (err,body) => {
         if (err) {
             res.statusCode = 500
             return res.end("have some error...")
         }
         console.log(body.fname)
         res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
         res.write(`<p>ชื่อ ${body.fname},นามสกุล ${body.lname}</p>`)
         res.end()
     })

}).listen(8080, () => console.log("Server start....."))