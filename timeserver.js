var net = require('net');
var dateString = "";
var newDate = new Date();
var mins = newDate.getMinutes();
var month = (newDate.getMonth() + 1);

if (month < 10) {
  month = "0" + month;
}
if (mins < 10) {
  mins = "0" + mins;
}

dateString += newDate.getFullYear() + "-";
dateString += month + "-";
dateString += newDate.getDate() + " ";
dateString += newDate.getHours() + ":";
dateString += mins;



var server = net.createServer(function(socket) {
  console.log('connected');
  socket.end(dateString);
});

server.listen(process.argv[2]);

// Official Solution

// Again, didn't adhere to DRY in my version.
// Not using a funtion to deal with the '0' issue was lazy in the wrong way.

/*

var net = require('net');

function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
}

function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
    })

server.listen(Number(process.argv[2]))

*/

// Work smarter!
