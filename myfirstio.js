/**
 * Created by michaelbrett on 23/01/15.
 */

var fs = require('fs');



var buff = fs.readFileSync( '/Users/michaelbrett/learnyounode/myfirstio.js' );

var str = buff.toString();

var arr = str.split('\n');



console.log(arr.length);


/** The above passed the program, however the official answer is as follows:

 var fs = require('fs');

 var contents = fs.readFileSync(process.argv[2]);        //Remember that returns the arguments entered into the console
 var lines = contents.toString().split('\n').length - 1;   //Looks like you can join all these methods together

 console.log(lines);

 **/