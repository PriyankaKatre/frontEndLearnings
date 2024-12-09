var fs = require('fs');
let output =
fs.readFileSync('data.txt','utf-8')
.trim()
.split('\n')
.map( line => line.split(" "))
.reduce((acc, curr) => {
    acc[curr[1]] = []
    //return console.log(curr);
    acc[curr[1]].push({
        name: curr[1],
        price: curr[2],
        qty: curr[3]
    })
    return acc;
}, {});
console.log('output', JSON.stringify(output, null, 2));

