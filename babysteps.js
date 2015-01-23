var output = 0;
var args = 0;
var babySteps = process.argv;
var processLength = babySteps.length;


for (i = 2; i < processLength; i++) {

   args = Number(process.argv[i]);
   output = output + args;

}

console.log(output);

/* Actual Solution: */

/* var result = 0;
   for(i=2; i < process.argv.length; i++ ){
   result += Number(process.argv[i]);
 }
   console.log(result); */


// My solution used redundant vars: args, babySteps, processLength
// I also originally got += reversed and I think that's what originally threw me.
