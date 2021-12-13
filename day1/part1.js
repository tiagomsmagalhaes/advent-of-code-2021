const fs = require('fs');

const numberOfTimesIncreased = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map((depth, i, depths) => {
    if (i === 0) return 0;

    return depth > depths[i - 1] ? 1 : 0;
})
.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(numberOfTimesIncreased);
