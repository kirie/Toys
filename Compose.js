// Compose should return a function that is the composition of a list of functions of arbitrary length. 
// Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.
'use strict';

// Example 1
var greet = function(name){ return 'hi: ' + name;};
var exclaim = function(statement) { return statement.toUpperCase() + '!';};

var welcome = compose(greet, exclaim);
console.log(welcome('phillip')); //=> 'hi: PHILLIP!'

function compose () {
  let arg = Array.prototype.slice.call(arguments);
  return function (x) {
    return arg.reduceRight ( function (acc, cur) {
      return cur(acc);
    }, x);
  };
}
