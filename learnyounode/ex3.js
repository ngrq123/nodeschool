var fs = require('fs');

var file_buffer = fs.readFileSync(process.argv[2]);
var file_contents = file_buffer.toString();

console.log(file_contents.split('\n').length - 1);