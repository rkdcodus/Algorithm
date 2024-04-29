const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    [...str].forEach(i => {
        if(i == i.toUpperCase()) return result += i.toLowerCase()
        result += i.toUpperCase()
    })
    console.log(result)
});