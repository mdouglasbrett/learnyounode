var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  req = fs.createReadStream(process.argv[3]);

  res = req.pipe(res);

});

server.listen(process.argv[2]);
