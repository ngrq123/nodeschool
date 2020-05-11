var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer((req, res) => {
    urlObj = url.parse(req.url);
    pathname = urlObj['pathname'];
    queryString = urlObj['query'].toString().split('=')[1];
    
    var date = new Date(queryString);
    var result = pathname === '/api/parsetime' ? parseTime(date) : unixTime(date);
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(result));
    res.end();
})
server.listen(port);

function parseTime(date) {
    var res = {
        "hour": date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }
    return res;
}

function unixTime(date) {
    var res = {
        "unixtime": date.getTime()
    }
    return res;
}