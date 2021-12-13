const fs = require('fs');
const sumReducerFn = (previousValue, currentValue) => previousValue + currentValue;

const increasedAccount = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map((depth, i, depths) => [parseInt(depth, 10), parseInt(depths[i + 1], 10), parseInt(depths[i + 2], 10)])
.filter(slidingWindow => slidingWindow.some(depth => depth !== undefined || depth !== NaN))
.map(slidingWindow => slidingWindow.reduce(sumReducerFn))
.map((depth, i, depths) => {
    if (i === 0) return 0;

    return depth > depths[i - 1] ? 1 : 0;
})
.reduce(sumReducerFn);

console.log(increasedAccount);
