var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  req = fs.createReadStream(process.argv[3]);

  res = req.pipe(res);

});

server.listen(process.argv[2]);

/* Official Solution

var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

I assumed the port supplied in process.argv[2] would be a number, but I suppose that's a bit naive.

No need to explicitly assign a value to req(?)

*/
