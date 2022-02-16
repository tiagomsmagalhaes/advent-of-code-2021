const fs = require('fs');

const vector = {forward: 0, depth: 0};

fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map(directions => directions.split(' ').map((v, i) => i % 2 !== 0 ? parseInt(v, 10) : v))
.forEach(instruction => {
    switch (instruction[0]) {
        case 'forward': vector.forward += instruction[1];   break;
        case 'down':    vector.depth += instruction[1];     break;
        case 'up':      vector.depth -= instruction[1];     break;
        default: break;
    }
})

console.log(vector.forward * vector.depth);
