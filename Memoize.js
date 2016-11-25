<<<<<<< bb5f13afc4347f2cc76b91431cba5046e4c95d2e:Memoize.js
// Create a memoize function that accepts a function and returns
// values that have been seen before.
=======
// Given a string and an index of an opening parenthesis,
// find the index of the closing parenthesis

// Constraint: O(n) time and O(1) space

const expect = require('expect');
>>>>>>> Add - Parenthesis Index:empty.js

function parenthesisIndex(str, startIndex) {
  let count = 0;
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    }
    if (str[i] === ')') {
      if (count <= 1) {
        return i;
      }
      count--;
    }
  }
  return 'An Error Occured';
}


// Test

const testFunction = () => {
  expect(
    parenthesisIndex('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10)
  ).toEqual(79);
};

<<<<<<< bb5f13afc4347f2cc76b91431cba5046e4c95d2e:Memoize.js
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
=======
testFunction();
console.log('All tests passed');
>>>>>>> Add - Parenthesis Index:empty.js
