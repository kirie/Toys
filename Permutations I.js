// https://leetcode.com/problems/permutations/
// Medium

'use strict';

function permute(arr) {
  let result = [];
  function recurse(build, options) {
    if(build.length === arr.length){
      result.push(build.slice());
      return;
    }
    for(let i = 0; i < options.length; i++){
      build.push(options[i]);
      recurse(build, options.slice(0,i).concat(options.slice(i+1)));
      build.pop();
    }
  }
  recurse([], arr);
  return result;
}

permute([1,2,3]);