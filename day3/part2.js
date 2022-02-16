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


const transposedSum = sum.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);

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

transposedSum.forEach((b, i, a) => {
    // console.log(b)
    const ones = b.filter(bit => bit === 1).length;
    const zeros = b.filter(bit => bit === 0).length;

    oxygen = oxygen.length > 1 ? oxygen.filter(s => s[i] === (ones >= zeros ? 1 : 0)) : oxygen;
    scrubber = scrubber.length > 1 ? scrubber.filter(s => s[i] === (ones >= zeros ? 0 : 1)) : scrubber;

    console.log(oxygen.length, scrubber.length);

})




// console.log(parseInt(oxygen[0].join(''), 2), parseInt(scrubber[0].join(''), 2));




const life = parseInt(oxygen[0].join(''), 2) * parseInt(scrubber[0].join(''), 2);
console.log(life)

