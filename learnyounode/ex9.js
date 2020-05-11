var http = require('http');

urls = process.argv.slice(2)
data = {}
numCompleted = 0;

for (idx = 0; idx < urls.length; idx++) {
    url = urls[idx];
    getRequest(url);
}

function getRequest(url) {
    http.get(url, function(response) {
        response.setEncoding('utf8');
        response.on('data', d => {
            data[url] = data[url] === undefined ? d : data[url] + d;
        });
        response.on('end', _ => {
            numCompleted++;
            if (numCompleted === urls.length) printResults();
        });
    }).on('error', console.error);
}

function printResults() {
    for (url of urls) {
        console.log(data[url]);
    }
}