// Merge two sorted arrays into one sorted array.
// See example usage below.

'use strict';

function merge(arr_A, arr_B) {
  let i = arr_A.length - 1;
  let j = arr_B.length - 1;

  // k will be the new length of our array
  let k = arr_A.length + arr_B.length - 1;  
  
  while (k >= 0) {
    // if the A array's length is still valid and the last element of A is greater than the last of B, then add it to the back of A
    // if B array is completed, then continue to add all of A's elements in.
    if (j < 0 || (i >= 0 && arr_A[i] > arr_B[j])) {  
      arr_A[k--] = arr_A[i--];
    }
    // all other cases will add array B's elements to array B.
    else {
      arr_A[k--] = arr_B[j--];
    }
  }
  return arr_A;
}

console.log(merge([2,4,6,7,9,10,20,22,30],[1,2,5,22]));