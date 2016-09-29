// Compare two strings to see if they are a permutation of another.
// Strings must be same length, no substrings.
'use strict';


const compare = (str1, str2) => {
  let obj = {};
  str1.split('').forEach(v => obj[v] = (obj[v] || 0) + 1);
  str2.split('').forEach(v => obj[v]--);
  let result = Object.keys(obj).map(v => {return obj[v];}).reduce((a,b) => {return a+b;});
  return (result === 0 ? 'PERMUTATION' : 'NOT PERMUTATION');
};

let test = compare('hello', 'lloeh');
console.log(test); // PERMUTATION
