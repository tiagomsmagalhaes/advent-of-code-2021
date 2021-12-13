const fs = require('fs');

const increasedAccount = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map((depth, index, depths) => {
    if (index === 0) {
        return 0;
    }
    if (depth > depths[index - 1]) {
        return 1;
    } else {
        return 0;
    }
})
.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(increasedAccount);
