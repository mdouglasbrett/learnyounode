/**
 * Created by michaelbrett on 23/01/15.
 */

var fs = require('fs');



function numLines(callback) {
    fs.readFile(process.argv[2], function getLines(err, fileContents) {
        num = fileContents.toString().split('\n').length - 1;
        callback();
    })
};

function logLines() {
    console.log(num);
}

numLines(logLines);

/** Again, the above passes the program but the official solution is different:
 *
 * var fs = require('fs')
 * var file = process.argv[2]
 *
 * fs.readFile(file, function (err, contents) {
 * var lines = contents.toString().split('\n').length - 1
 * console.log(lines)
 * })
 *
 * I suppose in this case, the callback is what is called as part of the readFile method
 */
