const fs = require('fs');

let maxDigits = 0;
let sum = fs.readFileSync(`${__dirname}/input.txt`)
.toString()
.split('\n')
.map(c => {
    const b = c.split('').map(c => parseInt(c, 10))
    maxDigits = b.length > maxDigits ? b.length : maxDigits;
    return b;
})



const gamma = parseInt(sum.map(b => {
    const ones = b.filter(bit => bit === 1).length;
    const zeros = b.filter(bit => bit === 0).length;

    return ones > zeros ? 1 : 0;
}).join(''), 2);

const epsilon = parseInt(sum.map(b => {
    const ones = b.filter(bit => bit === 1).length;
    const zeros = b.filter(bit => bit === 0).length;

    return ones > zeros ? 0 : 1;
}).join(''), 2);

const powerConsumption = gamma * epsilon;

// console.log(powerConsumption);
// ------------


let oxygen = [...sum];
let scrubber = [...sum];

let transposedSum = [];

for (let index = 0; index < maxDigits; index++) {

    transposedSum = sum.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);

    const bitsAtIndex = transposedSum[index];
    const ones = bitsAtIndex.filter(bit => bit === 1).length;
    const zeros = bitsAtIndex.filter(bit => bit === 0).length;

    console.log(ones, zeros);
    oxygen = oxygen.length > 1 ? oxygen.filter(s => s[index] === (ones >= zeros ? 1 : 0)) : oxygen;
    scrubber = scrubber.length > 1 ? scrubber.filter(s => s[index] === (ones >= zeros ? 0 : 1)) : scrubber;
}

// console.log(oxygen.length, scrubber.length)
console.log(parseInt(oxygen[0].join(''), 2), parseInt(scrubber[0].join(''), 2)); // 3910368


// function yo(list) {
//     console.log('yo')
// }


const life = parseInt(oxygen[0].join(''), 2) * parseInt(scrubber[0].join(''), 2);
console.log(life)

