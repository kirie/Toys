// Given an array of numbers, return an array with the product of all the other
// numbers excluding the value at each index.

// Given: [1,7,3,4]
// Output: [84, 12, 28, 21]

'use strict';
const expect = require('expect');

const otherProduct = (arr) => {
  let product = 1;
  let arrtemp = [];
  
  arr.forEach((v,i) => {
    arrtemp[i] = product;
    product *= v;
  });
  
  product = 1;
  for(let i = arr.length - 1; i >= 0; i--) {
    arrtemp[i] *= product;
    product *= arr[i];
  }
  return arrtemp;
};

const testFunction = () => {
  expect(
    otherProduct([1, 7, 3, 4])
  ).toEqual([84, 12, 28, 21]);
};

testFunction();
console.log('All tests passed');
