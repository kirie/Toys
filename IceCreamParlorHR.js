// https://www.hackerrank.com/challenges/icecream-parlor
// Searching

function processData (input) {
  let newArr = []
  let z = input.split('\n').slice(1)
  while (z.length) {
    newArr.push(z.splice(0, 3))
  }
  newArr.forEach((x) => {
    let results = []
    let money = parseInt(x[0])
    let flavcost = x[2].split(' ').map(Number)
    flavcost.forEach(function (v, i, a) {
      let leftover = money - parseInt(v)
      let subarr = a.slice(0, i).concat(a.slice(i + 1))
      if (subarr.indexOf(leftover) >= 0) {
        results.push(i + 1)
      }
    })
    console.log(...results)
  })
}

// Lines 4-8:  Parse data into 1 array (z) of seperate arrays for each case(3 strings) [[case1], [case2], [case3]]
// Lines 9-19: For each case, subtract the money from the an element and call it leftover.  This is the item we will
//             search the rest of the array for.  Create a subarray without that iteration value and search using
//             indexOf to see if it exists.  If it exists, we push it to the results array.   Add 1 for output
//             preference.
// Line 20:    Return result using the spread operator
