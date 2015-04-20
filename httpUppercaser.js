var http = require('http');
var map = require('through2-map');

var server = http.createServer( function (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);

/* Official Solution

var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

Again, my solution isn't 100% correct.

My solution doesn't check the request method and doesn't enforce number on the port argument.

What's the betting that would trip me up in production?

*/
