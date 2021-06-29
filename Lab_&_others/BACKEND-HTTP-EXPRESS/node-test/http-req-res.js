const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf8'})  //อย่าใช้ writeHead คู่กับ setHeader
    if (req.url === '/') {
        res.write('This is home page')
        return res.end()   //ตรงนี้ต้องใส่ rerurn เพื่อเด้งออกจาก func ถ้าไม่ใส่ มันจะไปทำงานบรรทัด 9 ต่อแล้วเกิด error
    }

    if (req.url === '/user') {
        res.write('This is user page')
        return res.end()   //ตรงนี้ต้องใส่ rerurn เพื่อเด้งออกจาก func ถ้าไม่ใส่ มันจะไปทำงานบรรทัด 9 ต่อแล้วเกิด error
    }
    res.writeHead(404, "not found in our site..",{
        'content-type': 'text/html'
    })
    res.end('<hr><h3>Not found</h3><hr>')
    
}).listen(8080, () => { console.log('server is running...') })

