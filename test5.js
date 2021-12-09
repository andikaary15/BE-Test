/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
 const words = ['flower', 'flow', 'flight'];

 function result(words) {
   // Your Code Here
   var prefix  = [];
   words.forEach(function(val,key) {
     prefix.push(val.substring(0,2))
   });
   return prefix;
 }
 
 console.log(result(words));
