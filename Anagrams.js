// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
// At first, don’t worry about repeated strings. What time complexity is your solution?
'use strict';

function allAnagrams (str) {
  // create a results object to hold every anagram we create
  let results = {};
  
  // create a recursive function taking in a string to build on and all the characters in the string (str)
  function recurse (build, options) {
    // this is our base case if our build reaches the same length.  3 characters in the test case of 'abc'
    if (build.length === str.length) {
      // we push our build string into our results object.  true is irrelevant
      results[build] = true;

      // return so we can go back down the stack
      return;
    }

    // loop through the possible characters
    for (let i = 0; i < options.length; i++) {
      // create a temporary string to build on adding 1 character at a time
      let makersq = build + options[i];
      // go down the tree(and up the stack) recursing and adding options(without the element we use)
      recurse(makersq, options.slice(0, i) + options.slice(i + 1));
    }
  }

  // begin our recursion with not
  recurse('', str);

  // return the keys of the object to prevent duplicates as an array
  return Object.keys(results);
}

console.log(allAnagrams('abc')); // [ "abc", "acb", "bac", "bca", "cab", "cba" ]
