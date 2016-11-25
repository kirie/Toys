// Given a string and an index of an opening parenthesis,
// find the index of the closing parenthesis

// Constraint: O(n) time and O(1) space

const expect = require('expect');

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

testFunction();
console.log('All tests passed');
