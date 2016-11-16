// Given a single input string, write a function that produces all possible anagrams of
// a string and outputs them as an array.  At first, don’t worry about repeated strings.

const expect = require('expect');

function allAnagrams(str) {
  const results = {};
  // create a recursive function taking in a string to build on and all the characters in the string
  function recurse(build, options) {
    // this is our base case if our build reaches the same length as the input str
    if (build.length === str.length) {
      // we push our build string into our results object.  true is irrelevant
      results[build] = true;
      // return so we can go back down the stack
      return;
    }

    // loop through the possible character string
    for (let i = 0; i < options.length; i++) {
      // create a temporary string to build on, adding 1 character at a time
      const tempStr = `${build}${options[i]}`;
      // go down the tree(and up the stack) recursing and adding options(without the element we use)
      recurse(tempStr, `${options.slice(0, i)}${options.slice(i + 1)}`);
    }
  }

  // begin our recursion with not
  recurse('', str);

  // return the keys of the object to prevent duplicates as an array
  return Object.keys(results);
}


// Test


const testAnagrams = () => {
  expect(
    allAnagrams('abc')
  ).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
};

testAnagrams();
console.log('All tests passed');
