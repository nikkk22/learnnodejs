var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var ret = str.split("\n");

console.log(ret.length - 1);