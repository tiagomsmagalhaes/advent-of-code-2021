const fs = require('fs');


const sum = fs.readFileSync(`${__dirname}/input.txt`)
.toString()
.split('\n')

console.log(sum)