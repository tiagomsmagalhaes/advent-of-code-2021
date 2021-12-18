const fs = require('fs');

const vector = {
    aim: 0,
    depth: 0,
    forward: 0, 
};

fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n')
.map(directions => directions.split(' ').map((v, i) => i % 2 !== 0 ? parseInt(v, 10) : v))
.forEach(instruction => {
    switch (instruction[0]) {
        case 'up':      vector.aim -= instruction[1];     break;
        case 'down':    vector.aim += instruction[1];     break;
        case 'forward': 
        vector.forward += instruction[1];
        vector.depth += vector.aim * instruction[1]
        break;
        default: break;
    }
})

console.log(vector.forward * vector.depth);

