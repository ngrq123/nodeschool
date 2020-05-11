var net = require('net')

var port = process.argv[2];

function pad(i) {
    return i < 10 ? '0' + i : i.toString();
}

var server = net.createServer(socket => {
    var date = new Date();
    // YYYY-MM-DD hh:mm
    date = date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' +
            pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes());
    socket.write(date + '\n');
    socket.end();
})

server.listen(port);