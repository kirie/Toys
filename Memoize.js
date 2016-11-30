// Create a memoize function that accepts a function and returns
// values that have been calculated before.

const expect = require('expect');
const Fibonacci = require('./Fibonacci');

function memoize(func) {
  const called = {};
  return function (item) {
    if (item in called) {
      return called[item];
    }
    called[item] = func.apply(this, arguments);
    return called[item];
  };
}


// Test


const testFib = memoize(Fibonacci);

console.time('first run');
testFib(30);
console.timeEnd('first run');

console.time('memoized call');
testFib(30);
console.timeEnd('memoized call');
