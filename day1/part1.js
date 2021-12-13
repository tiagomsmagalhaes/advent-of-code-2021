const { depthAnalyzerFn, sumReducerFn, readInput } = require('./shared');

const numberOfTimesIncreased = readInput.map(depthAnalyzerFn).reduce(sumReducerFn);

console.log(numberOfTimesIncreased);
