// Given an array of arbitrarily nested arrays, return n, where n is the deepest
// level that contains a non-array value.

const expect = require('expect');

function arrayception(arr) {
  // start with a count of 0
  let count = 0;

  // recursion starts
  function recurse(arr2, n) {
    // loop through the array
    for (let i = 0; i < arr2.length; i++) {
      // if it's an array and longer than 1 element, recurse on that element while increasing depth
      if (Array.isArray(arr2[i]) && arr2[i].length > 0) {
        recurse(arr2[i], n + 1);
      }
      // if it is not an array then check to see the depth and count and adjust
      else if (!Array.isArray(arr2[i])) {
        count = Math.max(n + 1, count);
      }
    }
  }
  // pass in our original array and a depth of 0
  recurse(arr, 0);

  // return our count
  return count;
}


// Test


const testArrayception = () => {
  expect(
    arrayception([2, [3], [5, 4, [[9]]]])
    ).toEqual(4);
};

testArrayception();
console.log('All tests passed');
