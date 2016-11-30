// Given a n value, find the nth Fibonacci value
// 0 1 1 2 3 5 8 13...

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  let x = 0;
  let y = 1;
  let addition = 1;
  for (let i = 2; i <= n; i++) {
    addition = x + y;
    x = y;
    y = addition;
  }
  return addition;
};

const fibonacciRecursive = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
};

module.exports = fibonacciRecursive;
