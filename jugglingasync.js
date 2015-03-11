// No point beating around the bush on this one - here is the official solution:



var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults () {
  for (var i=0; i < 3; i++)
    console.log(results[i]);
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      results[index] = data.toString();
      count ++;

      if (count == 3)
        printResults();
    }));
  });
}

for (var i = 0; i < 3; i++)
  httpGet(i);


/***** My work in progress before I caved:

//I was almost, almost, there in my head, but what stopped me from breaking through was my lack of adherence to the principle of DRY.
//There was an earlier version where I had a results object, instead of a results array, but I abandoned it.
//Regardless, looping would have solved my 'arg1, arg2, arg3' issue, which is clearly hacky and might have opened my eyes to the actual solution to the problem.
//But, instead, I just carried on writing the same code block three times.
//Like a n00b.
//Which I am.


var http = require('http');
var bl = require('bl');
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];

function juggleAsync(arg1, arg2, arg3) {

  var callbackCounter = 0;

  http.get(arg1, function(response) {
    response.pipe(bl(function(err, data) {
      if (err)
        console.log('Blazed');
      data = data.toString();
      callbackCounter ++;
      if (callbackCounter === 3) {
        console.log(data);
      }


    }));
  });

  http.get(arg2, function(response) {
    response.pipe(bl(function(err, data) {
      if (err)
        console.log('Your mom');
      data = data.toString();
      callbackCounter ++;
      if (callbackCounter === 3) {
        console.log(data);
}


    }));
  });

  http.get(arg3, function(response) {
    response.pipe(bl(function(err, data3) {
      if (err)
        console.log('Idiot');
      data3 = data3.toString();
      callbackCounter ++;
      if (callbackCounter === 3) {
        console.log(data);
}


    }));
  });

}

juggleAsync(arg1, arg2, arg3);

****/
