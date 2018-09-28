var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (!err) {
        var ext = process.argv[3];
        list.forEach((file) => {
            if (path.extname(file).slice(1) == ext) {
                console.log(file);
            }
        })
    }
})