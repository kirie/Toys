// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: 
// http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. 
// But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, 
// and returns a list of all of the words that can be written on the phone with that number. 

// (You should return all permutations, not only English words.)

// i/o test cases
// input: "0002"
// Expected output: [ "000A", "000B", "000C" ]
// input: "1123"
// Expected output: [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]

var keypad = {
  '0': ['_'],
  '1': ['-'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

var telephoneWords = function (digitString) {
  var temp = []
  var result = []
  var recursion = function (n) {
    // base case is when n is the length of the digits passed in
    if (n === digitString.length) {
      // join the temporary storage array and push it to our final results
      result.push(temp.join(''))
    }
    else {
      // get the array of each number in digitString
      var x = keypad[digitString.charAt(n)]
      // iterate over the array
      for (var i = 0; i < x.length; i++) {
        // push it to our temporary. keep pushing each iteration
        temp.push(x[i])
        // recurse for next digits
        recursion(n + 1)
        // remove it after
        temp.pop()
      }
    }
  }
  // start at beginning size 0
  recursion(0)
  return result
}
