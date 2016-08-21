// Amazon water/rainfall collection problem
// Given an array that represents tower height values, Find the amount of water collected in between the towers
// Example: [1,5,3,7,2]
//       *
//       *
//   * w *
//   * w *
//   * * *
//   * * * *
// * * * * *
// 1 5 3 7 2 

// Output: 2

'use strict';

const waterTower = function (arr) {
  let tallestleft = arr[0];
  let result = arr.map((v, i, a) => {
    let prev = a[i-1];
    console.log(prev);
    // for each value, find tallest to left and tallest to right, find the smaller of the two and subtract.  
    if(tallestleft > prev){
      return (Math.min(searchRight(a.slice(i), tallestleft)) - v);
    }
    else if(tallestleft < prev) {
      tallestleft = prev;
      return (Math.min(searchRight(a.slice(i), tallestleft)) - v);
    }
  });
  console.log(result);
  //return result.filter(v => {v && v > 0;}).reduce((a,b) => {return a+b;});
};

// Given an array and value, returns the tallest tower to the right
const searchRight = function(arr, previous) {
  let result = arr.filter(v => v > previous).shift() || 0;
  return result;
};

let testCase1 = waterTower([1,5,3,7,2]);
//let testCase2 = waterTower([5,3,7,2,6,4,5,9,1,2]);
//let testCase3 = waterTower([1,1,5,3,3,3,9]);
//let testCase4 = waterTower([5,3,7,2,6,4,5,9,1,2]);

console.log(testCase1);