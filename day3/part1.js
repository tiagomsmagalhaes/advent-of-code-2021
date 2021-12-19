const fs = require('fs');

const sum = fs.readFileSync(`${__dirname}/input.txt`)
.toString()
.split('\n')
.map(c => c.split('').map(c => parseInt(c, 10)))
.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);

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

console.log(gamma, epsilon, gamma * epsilon);
