// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each
// element at index n is the sum of the two elements from the other arrays at their index n’s.

const expect = require('expect');

const zipSum = (x, y) => x.slice(0, y.length).map((v, i) => v + y[i]);

function zipSum2(x, y) {
  const result = [];
  for (let i = 0; i < (x.length > y.length ? y.length : x.length); i++) {
    result.push(x[i] + y[i]);
  }
  return result;
}


// Test


const testZipsum = () => {
  expect(
    zipSum([10, 20, 30], [1, 2, 3])
  ).toEqual([11, 22, 33]);
  expect(
    zipSum([100, 1], [50, 5])
  ).toEqual([150, 6]);
  expect(
    zipSum([10, 20, 30], [1, 2])
  ).toEqual([11, 22]);
  expect(
    zipSum([10, 20], [1, 2, 3])
  ).toEqual([11, 22]);
};

testZipsum();
console.log('All tests passed');
