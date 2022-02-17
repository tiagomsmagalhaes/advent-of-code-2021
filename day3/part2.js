const fs = require('fs');

let maxDigits = 0;
const sum = fs.readFileSync(`${__dirname}/input.txt`)
.toString()
.split('\n')
.map(c => {
    const b = c.split('').map(c => parseInt(c, 10))
    maxDigits = b.length > maxDigits ? b.length : maxDigits;
    return b;
})
function obtainRating(sum, mostCommon) {
    let transposedSum = [];

    for (let index = 0; index < maxDigits; index++) {

        transposedSum = sum.reduce((prev, next) => next.map((_, i) => (prev[i] || []).concat(next[i])), []);

        const bitsAtIndex = transposedSum[index];
        const ones = bitsAtIndex.filter(bit => bit === 1).length;
        const zeros = bitsAtIndex.filter(bit => bit === 0).length;

        if (mostCommon) {
            sum = sum.length > 1 ? sum.filter(s => s[index] === (ones >= zeros ? 1 : 0)) : sum;
        } else {
            sum = sum.length > 1 ? sum.filter(s => s[index] === (ones >= zeros ? 0 : 1)) : sum;
        }
    }
    return parseInt(sum[0].join(''), 2);
}

const oxygen = obtainRating(sum, true);
const scrubber = obtainRating(sum, false);

const life = oxygen * scrubber;
console.log(life);
