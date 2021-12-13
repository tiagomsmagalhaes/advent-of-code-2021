const fs = require('fs');

const increasedAccount = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map(depth => parseInt(depth, 10))
.map((depth, i, depths) => [depth, depths[i + 1], depths[i + 2]])
.filter(slidingWindow => slidingWindow.some(slot => slot !== undefined || slot !== NaN))
.map(slidingWindow => slidingWindow.reduce((previousValue, currentValue) => previousValue + currentValue))
.map((depth, i, depths) => {
    if (i === 0) return 0;

    return depth > depths[i - 1] ? 1 : 0;
})
.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(increasedAccount);
