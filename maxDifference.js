// Write a function that finds the largest difference between an array of 
// numbers where i < j and a[i] < a[j]

const expect = require('expect');

function maxDiff(a) {
  const initialMax = Math.max(...a);
  const arr = a.slice(0, a.indexOf(initialMax));
  let maxdiff = initialMax - arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (initialMax - min > maxdiff) {
      maxdiff = initialMax - min;
    }
  }
  return maxdiff || -1;
}

const testFunc = () => {
  expect(
    maxDiff([930, 231, 4, 13, 22, 23])
  ).toEqual(-1);
  expect(
    maxDiff([7, 9, 5, 6, 3, 2])
  ).toEqual(2);
  expect(
    maxDiff([2, -3, 10, 2, 4, 20, 1])
  ).toEqual(23);
  expect(
    maxDiff([2, 3, 10, 2, 4, 8, 1])
  ).toEqual(8);
  expect(
    maxDiff([2, 3, 10, 2, 4, 8, 1000])
  ).toEqual(998);
  expect(
    maxDiff([10])
  ).toEqual(-1);
  expect(
    maxDiff([5, 2, 3, 10, -2, -40, -8, -1]))
  .toEqual(8);
  expect(
    maxDiff([2, 3, 10, 2, 40, 8, 1]))
  .toEqual(38);
};

testFunc();
console.log('All tests passed');
