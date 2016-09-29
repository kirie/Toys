// Given an array of arbitrarily nested arrays, return n, where n is the deepest 
// level that contains a non-array value.

function arrayception (array) {
  // start with a count of 0
  var count = 0;

  // recursion starts
  var recurse = function (arr, n) {
    // loop through the array
    for (var i = 0; i < arr.length; i++) {
      // if it is an array and longer than 1 element then we recurse again on that element increasing depth
      if (Array.isArray(arr[i]) && arr[i].length > 0) {
        recurse(arr[i], n + 1);
      }
      // if it is not an array then check to see the depth and count and adjust
      else if (!Array.isArray(arr[i])) {
        count = Math.max(n + 1, count);
      }
    }
  };
  // pass in our original array and a depth of 0
  recurse(array, 0);

  // return our count
  return count;
}
