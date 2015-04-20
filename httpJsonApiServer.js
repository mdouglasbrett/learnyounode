var http = require('http');
var url = require('url');

 function pTime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

 function uTime (time) {
   return {
     "unixtime": time.getTime()
   };
}

var parsetime = '/api/parsetime';
var unixtime = '/api/unixtime';

var server = http.createServer(function (req, res) {


  var request = url.parse(req.url, true);
  var time = new Date(request.query.iso);
  var result;
  if (request.pathname == parsetime) {
    result = pTime(time);
  } else if (request.pathname == unixtime) {
    result = uTime(time);
  } else {
    console.log("Something fucked up");
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }

});

server.listen(Number(process.argv[2]));

/* Official Solution

var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

Got stuck on this one and had to take a peek. The key was turning the request.query.iso into a Date object, to use the getTime() etc methods on.

*/
