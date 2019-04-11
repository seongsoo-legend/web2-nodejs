var fs = require('fs');

//readFileSync
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/



fs.readFile('syntax/sample.txt', 'utf-8', function (err, reasult) {
    console.log(reasult)
})
console.log('HAHA')
console.log('HAHA')