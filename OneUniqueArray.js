// Given an array of consecutive numbers with duplicates, 
// find the one unique number.

// Constraint: O(n) time and O(1) space

const expect = require('expect');

function ioCheck(arr) {
  let x = 0;
  arr.forEach(v => x ^= v);
  return x;
}

// Test


const testFunction = () => {
  expect(
    ioCheck([3, 2, 1, 1, 2])
  ).toEqual(3);
  expect(
    ioCheck([2, 3, 3, 2])
  ).toEqual(0);
};

testFunction();
console.log('All tests passed');
