const fs = require('fs');

fs.readFile('./rea.txt', (err, data) => {
    ;
    if (err) {
        console.log('error...')
        return
    };
    console.log(data.toString())
})
