// Bubble Sorting an Array

// Given an Array, sort through the array implementing Bubble Sort
// O(n^2)

var bubbleSort = function (array) {
  // double for loop to go through each item
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < array.length - i; x++) {
      // check to see if the current value array[x] is greater than the next
      if (array[x] > array[x + 1]) {
        // create a temporary variable to swap values
        var temp = array[x + 1]
        array[x + 1] = array[x]
        array[x] = temp
      }
    }
  }
  return array
}
