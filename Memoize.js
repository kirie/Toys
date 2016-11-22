// Create a memoize function that accepts a function and returns
// values that have been seen before.

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

console.time('First run');
testFib(30);
console.timeEnd('First run');

console.time('Memoized call');
testFib(30);
console.timeEnd('Memoized call');