const fs = require('fs');

for (let i = 0; i < 10 ; i++) {
    fs.readFile('./read.txt', (err, data) => {
        console.log(data.toString())
    })
    fs.readFile('./read2.txt', (err, data) => {
        console.log(data.toString())
})

}