var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    console.log(data);
  });
});

/* Official solution - simpler use of response.on(), and included an error message. I adapted mine from the node docs, guess I don't need that function in the response.on() method. Here it is:

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})

*/
