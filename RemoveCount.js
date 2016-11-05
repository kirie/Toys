// Given an array and a value, remove all instances of that value in place and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

'use strict';

const expect = require('expect');

const remove = (arr, target) => {
  //sort array before filtering to possibly improve performance.

  return arr.sort((a,b) => {return a - b}).slice(arr.indexOf(target)).filter((v) => { return v === target}).length
};

const testRemove = () => {
  expect(
    remove([2,22,2,99,1,3,3,3,3], 3)
  ).toEqual(4);
};

testRemove();
console.log('All tests passed');