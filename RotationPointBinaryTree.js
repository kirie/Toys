// Find the starting index of an array of sorted words.
// Use a Binary Tree implementation

// Constraints: O(log(n))

const expect = require('expect');

function rotationPoint(words) {
  const first = words[0];
  let floor = 0;
  let ceiling = words.length - 1;
  while (floor < ceiling) {
    const mid = Math.round((ceiling - floor) / 2) + floor;
    if (words[mid].localeCompare(first) > 0) {
      floor = mid;
    }
    else {
      ceiling = mid;
    }
    if (floor + 1 === ceiling) {
      // converged and last element is not the start
      if (words[ceiling].localeCompare(first) > 0) {
        return 0;
      }
      return ceiling;
    }
  }
}


// Test


const testFunction = () => {
  expect(
    rotationPoint(['dog', 'hippomoztimus', 'mammoth', 'parrot', 'zebra', 'ant', 'cat'])
  ).toEqual(5);
  expect(
    rotationPoint(['apple', 'banana', 'mango', 'pineapple', 'watermelon'])
  ).toEqual(0);
};

testFunction();
console.log('All tests passed');
