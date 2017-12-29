// Given an array where values are 1 to n.
// Find the missing inclusive values not in the array of 1 to n
// Constraint: O(n)

const expect = require('expect');

function findDisappearedNum(arr) {

  // Mark all all indicies as negative that have values that exist
  arr.forEach((v, _, a) => {
    const index = Math.abs(v) - 1;
    if (a[index] > 0) {
      a[index] *= -1;
    }
  });

  // loop through and find all positive numbers
  return arr.reduce((p, c, i) => {
    if (c > 0) {
      p.push(i + 1);
      return p;
    }
    return p;
  }, []);
}

const testFunc = () => {
  expect(
    findDisappearedNum([4, 3, 2, 7, 8, 2, 3, 1]))
  .toEqual([5, 6]);
};

testFunc();
console.log('All tests passed');
