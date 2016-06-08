// Write a function that takes as its input a string and returns an array of arrays as shown
// below sorted in descending order by frequency and then by ascending order by character.

// Test cases:

// string: "aaabbc"
// output: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

// string: "mississippi"
// output: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

// string: ""
// output: [ ]

function characterFrequency (string) {
  var obj1 = {}
  var result = []
  if (string.length === 0) {
    return []
  }

  // convert the string into object pairs with occurance value
  for (var i = 0; i < string.length; i++) {
    if (obj1[string.charAt(i)]) {
      obj1[string.charAt(i)]+= 1
    }
    else {
      obj1[string.charAt(i)] = 1
    }
  }

  // take object and push key pairs to arrays in an array for sorting
  for (var key in obj1) {
    result.push([key, obj1[key]])
  }
  // use sort
  result.sort(function (a, b) {
    if (a[1] > b[1]) {
      // -1 = sort first before second
      return -1
    }
    else if (a[1] < b[1]) {
      // 1 = first after second
      return 1
    }
    else if (a[0] > b[0]) {
      return 1
    }
    else if (a[0] < b[0]) {
      return -1
    }
  })

  return result
}
