var fs = require('fs');
var path = require('path');

var fileArg =  '.' + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
	var fileString;
	for (i=0; i < list.length ; i++) {
	fileString =	list[i].toString()
	
	if (path.extname(fileString) === fileArg.toString()) {
	console.log(fileString)
	}
	}
});

/* Official solution - used a forEach on list instead of a for loop	
var fs = require('fs')   
var path = require('path') // Also superfluous vars (fileArg) and no need for toString()

        fs.readdir(process.argv[2], function (err, list) 
       	list.forEach(function (file) {
	if (path.extname(file) === '.' + process.argv[3])
	console.log(file)
	})
})
			  */
