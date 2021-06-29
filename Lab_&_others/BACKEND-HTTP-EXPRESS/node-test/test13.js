const fs = require('fs');

function readMessage() {
    return new Promise(function(fulfill,reject) {
        fs.readFile('./message.txt', 'utf8',(err,res) => {
            if (err) reject(err)
            else fulfill(res);
        })
    })
}

function writeMessage(data) {
    return new Promise(function(fulfill,reject) {
        fs.writeFile('./test.txt',data, (err,res)=> {
            if (err) reject(err)
            else fulfill(res);
        })
    })
}

readMessage().then(writeMessage).then(console.log('success'))