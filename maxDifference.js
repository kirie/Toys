const expect = require('expect');

// Find the largest difference in an array (arr), between any a[i] and a[j] where i < j and a[i] < a[j]
// example:
// given: [4, 1, 2, 3], the largest difference would be a[3] - a[1] = 2

const maxDifference = arr => {
  let max = arr[0];
  arr.forEach((v) => {
    if (v > max) {
      max = v;
    }
  });
  const index = arr.indexOf(max);
  const left = arr.slice(0, index);
  let min = max;
  left.forEach((v) => {
    if (v < min) {
      min = v;
    }
  });
  return min < max ? (max - min) : -1;
};

const testFunc = () => {
  expect(
    maxDifference([930, 231, 4, 13, 22, 23])
  ).toEqual(-1);
  expect(
    maxDifference([7, 9, 5, 6, 3, 2])
  ).toEqual(2);
  expect(
    maxDifference([2, -3, 10, 2, 4, 20, 1])
  ).toEqual(23);
  expect(
    maxDifference([2, 3, 10, 2, 4, 8, 1])
  ).toEqual(8);
  expect(
    maxDifference([2, 3, 10, 2, 4, 8, 1000])
  ).toEqual(998);
  expect(
    maxDifference([10])
  ).toEqual(-1);
};

testFunc();
console.log('All tests passed');
