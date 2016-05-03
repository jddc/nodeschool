//## MY FIRST I/O!
var fs = require('fs');
var buff = fs.readFileSync(process.argv[1]).toString();
console.log(buff.split('\n').length);
