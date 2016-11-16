// Given an array, find the index of the target value, else return -1

const expect = require('expect');

const binarySearchIndex = (tree, target) => {
  let min = 0;
  let max = tree.length - 1;
  while (min <= max) {
    const half = Math.floor((min + max) / 2);
    if (tree[half] === target) {
      return half;
    }
    if (tree[half] < target) {
      min = half + 1;
    }
    else {
      max = half - 1;
    }
  }
  return -1;
};


// Test


const testBSI = () => {
  expect(
    binarySearchIndex([11, 12, 13, 14, 15, 16, 17, 18, 19], 18)
  ).toEqual(7);
};

testBSI();
console.log('All tests passed');
