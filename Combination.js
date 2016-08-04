// https://leetcode.com/problems/combinations/
// Find all Combinations of k numbers given values from 1 to n.

'use strict';

let combine= function (n, k) {
  let result = [];
  let build = [];
  if(n === 0 || k === 0 ){
    return [];
  }
  let recurse = function (build, counter) {
    // Base case where build === k. Push the build to result.
    if(build.length === k) {
      result.push(build.slice());
      return;
    }
    // Return if the counter becomes greater than n.
    if (counter > n) {
      return;
    }
    // Push the counter onto the build and recurse with that build and an incremented counter
    build.push(counter);
    recurse(build, counter+1);
    // Pop the current counter off and repeat the steps with counter + 1 again.
    build.pop();
    recurse(build, counter+1);
  };

  // Begin recursion here.
  recurse(build, 1);
  return result;
};

let final = combine(4,2);
console.log(final); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]

