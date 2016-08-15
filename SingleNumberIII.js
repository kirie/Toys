// https://leetcode.com/problems/single-number-iii/
// Medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
'use strict';
var singleNumber = function(nums) {
  let result = [];
  
  nums.sort(); // sorting so the integers are grouped
  
  while(nums.length > 0) {
    let x = nums.shift();
    if(nums.indexOf(x) != -1){
      while(nums[0] === x){
        nums.shift();
      }
    }
    else{
      result.push(x);
    }
  }
  return result;
};

singleNumber([2,0,0,3,2,4,4,4,4,4,5,4,5,1,1000,1000]); // should output [1,3]
