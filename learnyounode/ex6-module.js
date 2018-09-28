var fs = require('fs');
var path = require('path');

// module.exports = function(file, ext, callback) {
//     fs.readdir(file, (err, list) => {
//         filteredFiles = [];

//         if (err) {
//             return callback(err);
//         }
    
//         list.filter((file) => {
//             let fileExt = path.extname(file);
//             if (ext.charAt(0) != '.') {
//                 fileExt = fileExt.slice(1);
//             }
//             if (fileExt == ext) {
//                 console.log(file);
//                 filteredFiles.push(file);
//             }
//         });
    
//         callback(null, filteredFiles);
//     });
// }

module.exports = function(file, ext, callback) {
    fs.readdir(file, (err, list) => {
        if (err) {
            return callback(err);
        }
    
        list = list.filter((file) => {
            let fileExt = path.extname(file);
            if (ext.charAt(0) != '.') {
                fileExt = fileExt.slice(1);
            }
            if (fileExt == ext) {
                console.log(file);
            }
            return fileExt == ext;
        });
    
        callback(null, list);
    });
}