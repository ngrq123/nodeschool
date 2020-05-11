var http = require('http');

var url = process.argv[2]
http.get(url, function(response) {
    // console.log(response.statusCode);s
    response.on('data', function(data) {
        console.log(data.toString());
    })
}).on('error', function(e) {
    console.log(e);
})