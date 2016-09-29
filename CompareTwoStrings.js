// Compare two strings to see if they are a permutation of another.
// Strings must be same length, no substrings.
'use strict';
const expect = require('expect');

const compare = (str1, str2) => {
  let obj = {};
  str1.split('').forEach(v => obj[v] = (obj[v] || 0) + 1);
  str2.split('').forEach(v => obj[v]--);
  let result = Object.keys(obj).map(v => {return obj[v];}).reduce((a,b) => {return a+b;});
  return (result === 0 ? 'PERMUTATION' : 'NOT PERMUTATION');
};

const testCompare = () => {
  expect(
    compare('hello', 'elloh')
  ).toEqual('PERMUTATION');
};

testCompare();
console.log('All tests passed');