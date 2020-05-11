var http = require('http');

var url = process.argv[2];
var data = '';
http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', d => data = data + d);
    response.on('end', _ => {
        console.log(data.length)
        console.log(data)
    });
}).on('error', console.error)