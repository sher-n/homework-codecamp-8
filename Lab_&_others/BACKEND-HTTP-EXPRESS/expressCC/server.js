const express = require("express")
const app = express() //ตอนนี้ app กลายเป็นตัวเชิฟเวอร์
app.use('/', (req,res) => {
    res.send('hello from express')  // เหมือน res.write + res.end

})

app.listen(3000, () => console.log('express server start...'))


