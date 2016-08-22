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
  let tallestleft = 0;
  let result = arr.map((v, i, a) => {
    let prev = a[i-1] || 0;
    // for each value, find tallest to left and tallest to right, find the smaller of the two and subtract. 
    if(tallestleft > prev){
      let right = searchRight(a.slice(i+1), a[i]);
      if(right < tallestleft) {
        let newRight = searchRight(a.slice(i+1), tallestleft);
        return Math.min(newRight, tallestleft) - v;
      }
      return Math.min(right, tallestleft) - v;
    }
    else {
      tallestleft = prev;
      let right = searchRight(a.slice(i+1), a[i]);
      if(right < tallestleft) {
        // find next tallest right tower that is greater or equal to tallest left
        let newRight = searchRight(a.slice(i+1), tallestleft);
        if(newRight === 0) {
          return Math.min(tallestleft, a[i+1]) - v;
        }
        return Math.min(tallestleft, newRight) - v;
      }
      return (Math.min(right, tallestleft)) - v;
    }
  }); 
  return result.filter(v => v && v > 0).reduce((a,b) => {return a+b;});
};

// Given an array and value, returns the tallest tower to the right
const searchRight = function(arr, target) {
  let result = arr.filter(v => v >= target).shift() || 0;
  return result;
};

let testCase1 = waterTower([1,5,3,7,2]); // 2
let testCase2 = waterTower([5,3,7,2,6,4,5,9,1,2]); // 14

//                 *
//                 *
//       * w w w w *
//       * w * w w *
//   * w * w * w * *
//   * w * w * * * *
//   * * * w * * * *
//   * * * * * * * * w *
//   * * * * * * * * * *
//   5 3 7 2 6 4 5 9 1 2
// [ x 2 x 5 1 3 2 x 1 x ] => 14

let testCase3 = waterTower([1,1,5,3,3,3,9]);
let testCase4 = waterTower([5,3,7,2,6,4,5,9,1,2]);

console.log(testCase1, testCase2, testCase3, testCase4);
