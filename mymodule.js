module.exports = myModule;


 function myModule(dir, ext, callback) {
		var fs = require('fs');
		var path = require('path');

	fs.readdir(dir, function (err, list) {
		var newList = [];
		if (err)
			return callback(err);


		list.forEach(function(file) {
	if (path.extname(file) === '.' + ext)
		newList.push(file);
	});

		callback(null, newList);


});
}


/* Official Solution (part 1)

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

			fs.readdir(dir, function (err, list) {
				if (err)
					return callback(err)

				list = list.filter(function (file) {
					return path.extname(file) === '.' + filterStr
				})

				callback(null, list)
			})
		}

Is that a filter method they're calling on list? MDN says yes, it constructs a new array of all the values where the callback returns true. The more you know...

*/		
