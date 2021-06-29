const fs = require('fs');

const data = fs.readFileSync('./read.txt')
console.log(data.toString());