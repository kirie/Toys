// Given an array and a value, remove all instances of that value in place and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

'use strict';

const expect = require('expect');

// 1
const removeElements = (arr, target) => {
  return arr.filter(v => v !== target).length;
};

const testRemoveElements = () => {
  expect(
    removeElements([2,22,2,99,1,3,3,3,3], 3)
  ).toEqual(5);
  expect(
    removeElements([1], 1)
  ).toEqual(0);
  expect(
    removeElements([3,2,2,3], 3)
  ).toEqual(2);
};

testRemoveElements();

console.log('All tests passed');
