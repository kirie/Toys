// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location.
// It takes each element from the input and finds the spot, up to the current point, where that
// element belongs (in constant space). It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this,
// so we’ll be sorting objects with a value field, on which they will be sorted, like so:

// http://visualgo.net/sorting
// select insertion sort

const insertionSort = (array) => {
	// loop through the array
  for (let i = 0; i < array.length; i++) {
    // set current to be the current element in the array and previous is the previous value
    // [1,2,4,5,3,7]
    // [0,1,2,3,4,5]
    let current = array[i] // 4 = 3
    let previous = i - 1 // 3
    // while the previous is valid (greater than 0) and the current is less than the previous element of array
    while ((previous >= 0) && (current < array[previous])) {
      // we are going to move the elements that are greater than the current up.
      // slowly move until current != array[previous]
      array[previous + 1] = array[previous]
      previous--
    }
    // place the current value into it's correct place
    array[previous + 1] = current
  }
  return array
}
