const fs = require('fs');
module.exports = {
    sumReducerFn: (previousValue, currentValue) => previousValue + currentValue,
    depthAnalyzerFn: (depth, i, depths) => {
        if (i === 0) return 0;
    
        return depth > depths[i - 1] ? 1 : 0;
    },
    readInput: fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
}
