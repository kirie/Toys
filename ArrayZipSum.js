// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the
// sum of the two elements from the other arrays at their index n’s.
//
//
//
// 
// Test Cases Input/Output
// xs: [ 10, 20, 30 ]
// ys: [ 1, 2, 3 ]	
// Output: [ 11, 22, 33 ]

// xs: [ 100, 1 ]
// ys: [ 50, 5 ]	
// Output: [ 150, 6 ]

// xs: [ 10, 20, 30 ]
// ys: [ 1, 2 ]	
// Output: [ 11, 22 ]

// xs: [ 10, 20 ]
// ys: [ 1, 2, 3 ]	
// Output: [ 11, 22 ]

function zipSum (xs, ys) {
  //Make result array
  var result = [];
  
  // loop using the length of the longer array
  for(var i = 0;i<(xs.length > ys.length ? ys.length: xs.length);i++){
    // push the sum of to our array
    result.push(xs[i] + ys[i]);
  }
  // return result
  return result;
}
