var myModule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir, ext, function(err, data) {
  if (err)
    console.log("This is the error: " + err);

    data.forEach(function(file) {
      console.log(file);
    });
});


/* Official solution (part 2):

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})

BOOOOOM! */
