// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.

// Test
//
// Input: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
// Output: 2
// Input: [ "cat", "dog", "dig", "cat" ]
// Output: 'cat'

function evenOccurrence (arr) {
  var temp1 = {}
  var done
  var ntest = false
  // loop through the array and put keys into an object with value as the occurance count
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in temp1) {
      temp1[arr[i]] +=1
    }
    else {
      temp1[arr[i]] = 1
    }
  }
  // loop through the array again, but compare with the object we just created
  for (var r = 0; r < arr.length; r++) {
    var k = arr[r]
    // modulo to see if it is 0 (even)
    var x = temp1[k] % 2
    if ((arr[r] in temp1) && (x === 0)) {
      ntest = true
      done = k
      // break out if the condition holds true
      break
    }
  }
  // return null if it fails the test
  if (!ntest) {
      return null
  }
  // return first even occurance
  else {
      return done
  }
}
