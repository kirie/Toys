//  Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
//  A single array item will count as a contiguous sum.

// Sample Inputs:

// [ 1, 2, 3 ]
// Output: 6

// [ 4, -1, 5 ]
// Output: 8

// [ 10, -11, 11 ]
// Output: 11

// [ 1, 2, 3, -6, 4, 5, 6 ]
// Output: 15

function sumArray (array) {
  let maxSum = array[0]
  let currentSum = 0
  array.forEach((x) => {
    currentSum += x
    maxSum = Math.max(currentSum, maxSum)
    if (currentSum < 0) {
      currentSum = 0
    }
  })
  return maxSum
}
