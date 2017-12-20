// Find the longest number of consecutive increasing integers in an array
// ie. Given: [4, 3, 5, 8, 9, 10, 2 ]
// Output: 4 (from 5, 8, 9, 10)

const expect = require('expect');

function consecutiveIncrease(a) {
  let count = 1;
  let longest = 0;
  let previous = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > previous) {
      count++;
      if (count > longest) {
        longest = count;
      }
    }
    else {
      count = 1;
    }
    previous = a[i];
  }
  return longest;
}

const testFunc = () => {
  expect(
    consecutiveIncrease([4, 2, 5, 9, 14, 16, 1]))
  .toEqual(5);
  expect(
    consecutiveIncrease([4, 3, 5, 8, 9, 10, 2, 15, 16, 17, 18, 19, 20]))
  .toEqual(7);
  expect(
    consecutiveIncrease([4]))
  .toEqual(0);
};

testFunc();
console.log('All tests passed');
