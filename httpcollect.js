var http = require('http');
var bl = require('bl');


http.get(process.argv[2], function(response){
  var buffData;
  response.pipe(bl(function (err, data) {
    buffData = data.toString();
    console.log(buffData.length);
    console.log(buffData);
  }));
});


/**** Actual solution:

var http = require('http')
var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

Lessons to learn: don't declare variables you don't need. Also, if an err is returned, make sure it isn't silent ***************/
