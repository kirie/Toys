const expect = require('expect');

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


function fibonacci(num) {
  if (num < 2) return 1;
  else return fibonacci(num - 1) + fibonacci (num - 2);
}

const testFib = memoize(fibonacci);

console.time('first run');
testFib(30);
console.timeEnd('first run');

console.time('memoized call');
testFib(30);
console.timeEnd('memoized call');