// 1.) Given an array of nested arrays, flatten the arrays

// Example Input: [1,[3,[2,[2,[3]]],4,[3,2,[4,2]]]
// Example Output: [1, 3, 2, 2, 3, 4, 3, 2, 4, 2]

const flatten = (arr) => {
  let result = []
  const recurse = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        result.push(arr[i])
      }
      else {
        recurse(arr[i])
      }
    }
  }
  recurse(arr)
  return result
}

const x = [1, [3, [2, [2, [3]]]], 4, [3, 2, [4, 2]]]
flatten(x)

// 2.) Given a mixture of arrays and objects, test the values with a callback input and return the values
const testArrObj = (input_collection, cb) => {
  let result = []
  const recurse = function (collection) {
    // if it's a primitive type, just test it
    if (!Array.isArray(collection) && !(Object.prototype.toString.call(collection) === '[object Object]')) {
      if (cb(collection)) {
        result.push(collection)
      }
    }
    // test if it's an object, then back any input back into the recursion
    else if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (let x in collection) {
        recurse(collection[x])
      }
    }
    // test if it's an array, and put it into the recursion
    else if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        recurse(collection[i])
      }
    }
  }
  recurse(input_collection)
  return result
}

const testline = [1, [3, [2, [2, [3]]]], {4: 4}, [3, 2, [4, 2]]]
testArrObj(testline, (x) => { return x > 2 })
