// https://leetcode.com/problems/ransom-note/

// Given an arbitrary ransom note string and another string containing
// letters from all magazines, write a function that will return true if
// the ransom note can be constructed from the magazines; otherwise false

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const expect = require('expect');

function canConstruct(ransomNote, magazine) {
  const myObj = {};
  magazine.split('').forEach(x => myObj[x] = (myObj[x] || 0) + 1);
  ransomNote.split('').forEach(x => myObj[x] = (myObj[x] || 0) - 1);
  return Object.keys(myObj).every(x => myObj[x] >= 0);
}


// Test


const testcanConstruct = () => {
  expect(
    canConstruct('aa', 'aab')
  ).toEqual(true);
  expect(
    canConstruct('aa', 'ab')
  ).toEqual(false);
};

testcanConstruct();
console.log('All tests passed');
