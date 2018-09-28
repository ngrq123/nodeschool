var fs = require('fs');
var path = require('path');

module.exports = function(file, ext, callback) {
    fs.readdir(file, (err, list) => {
        if (err) {
            return callback(err);
        }
        if (!err) {
            list.forEach((file) => {
                if (path.extname(file).slice(1) == ext) {
                    console.log(file);
                }
            })
        }
        callback(null, list);
    });
}