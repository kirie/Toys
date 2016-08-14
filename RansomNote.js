// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
  let myObj = {};
  magazine.split('').forEach((x) => myObj[x] = (myObj[x] || 0) + 1);
  ransomNote.split('').forEach((x) => myObj[x] = (myObj[x] || 0) -1);
  return Object.keys(myObj).every((x) => {return myObj[x] >= 0});
};
