const { depthAnalyzerFn, sumReducerFn, readInput } = require('./shared');

const numberOfTimesIncreased = readInput
.map((depth, i, depths) => [parseInt(depth, 10), parseInt(depths[i + 1], 10), parseInt(depths[i + 2], 10)])
.filter(slidingWindow => slidingWindow.some(depth => depth !== undefined || depth !== NaN))
.map(slidingWindow => slidingWindow.reduce(sumReducerFn))
.map(depthAnalyzerFn)
.reduce(sumReducerFn);

console.log(numberOfTimesIncreased);
