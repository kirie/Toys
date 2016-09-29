// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
'use strict';
var twoSum = function(nums, target) {
  let map = {};
  let result = [];
  for(let i = 0; i < nums.length; i++) {
    if(map.hasOwnProperty(nums[i])){  // hasOwnProperty over map[nums[i]] 
      result.push([map[nums[i]], i]);
    }
    map[target - nums[i]] = i;
  }
  return result;
};

console.log(twoSum([2, 4, 6, 11, -4, 1, 3], 7)); // Should give indices: [3,4] , [2,5], and [1,6]
