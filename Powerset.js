// Return an array that contains the power set of a given string. 
// The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. 
'use strict';

function powerSet (str) {
  let myobj = {};
  let result = [''];
  str.split('').forEach((eachVal) => {myobj[eachVal] = true;});
  let resultArr = Object.keys(myobj).sort().join('');
  const recurse = function(build, options){
    for(let i = 0; i < options.length; i++){
      result.push(build + options[i]);
      // send next recurse the new build + the next options (i+1)
      recurse(build + options[i], options.slice(i+1));
    }
  };
  recurse('', resultArr);
  return result.sort();
}

let test = powerSet('obama');
console.log(test);
