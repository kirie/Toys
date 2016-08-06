'use strict';

// 1. Basic set
let mySet = new Set([1,2,3,4,5]);
mySet.add(5);
mySet.add('5');
console.log(mySet.size); // 6
console.log(mySet.has('5')); // true

// 2. Set with a forEach
mySet.forEach(function(value, key, theSet) {
  console.log('key: ' + key + ' value: ' + value);
  console.log(theSet);
});


// 3. Creating an Array from a set
let arrfromset= [...mySet]; // creates array
console.log(arrfromset);


// 4. Removing duplicates from an Array using Set
function removeDups (arr) {
  return [... new Set(arr)];
}
let testarr = [1, 2, 3, 2, 3];
console.log(removeDups(testarr));  // [1, 2, 3]


// 5. Weak Set.  Weak object references only. Can't store primitives(throws errors)
let myWeakSet = new WeakSet();
let myObj = {};
myWeakSet.add(myObj);
console.log(myWeakSet.has(myObj)); // true
myObj = null;
console.log(myWeakSet.has(myObj)); // false
