const fs = require('fs');
let increased = 0;

fs.readFileSync(__dirname + '/input.txt').toString().split('\n').map((depth, index, depths) => {
    if (index > 0 && depth > depths[index - 1]) increased++;
    return depth; 
});
