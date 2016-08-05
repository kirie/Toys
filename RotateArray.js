// Rotate an array k times.
// https://leetcode.com/problems/rotate-array/

// Do it in place.
// O(n) * rotations.  Worst being when rotations is equal to the entire length.
// Unshift is linear

'use strict';

let rotate = function(nums, k) {
  let rotations = k % nums.length;
  while (rotations > 0) {
    nums.unshift(nums.pop());
    rotations--;
  }
  return nums;
};

let test = rotate([2,3,4,5,2,1,3,4,5,6,7,], 12);
console.log(test);
