// https://leetcode.com/problems/permutations-ii/
// Find all unique permutations given an array of numbers.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
'use strict';
let permuteUnique = function(nums) {
  let result = {};
  function recurse(build, options){
    if(build.length === nums.length){
      result[build] = true;
    }
    for(let i = 0;i < options.length;i++) {
      build.push(options[i]);
      recurse(build, options.slice(0,i).concat(options.slice(i+1)));
      build.pop();
    }
  }
  recurse([], nums);
  return Object.keys(result).map((x) => x.split(',').map(Number));
};

let test = permuteUnique([1,1,2]);
console.log(test);