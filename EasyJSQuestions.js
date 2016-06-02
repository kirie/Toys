// Verify a prime number?

function prime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

prime(151) // TRUE

// Find all prime factors of a number?

function primefactors (num) {
  var results = []
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      results.push(i)
    }
  }
  return results
}

primefactors(69) // [3, 23]

// Get nth Fibonacci number?
function fibonacci (n) {
  var x = 0
  var y = 1
  var result = 1
  if (n === 0) {
    return 0
  }
  for (var i = 2; i <= n; i++) {
    result = x + y
    x = y
    y = result
  }
  return result
}

// 0, 1, 1, 2, 3, 5
fibonacci(6) // 8

// Find the greatest common divisor of two numbers?

function gcd (x, y) {
  while (y !== 0) {
    var z = x % y
    x = y
    y = z
  }
  return x
}

// Remove duplicate members from an array?

function removeDups (arr) {
  return arr.filter(function (a, b) {
    return arr.indexOf(a) === b
  })
}
// [1,2,3,4,5]
/** O(n2) **/

function removeDups2 (arr) {
  var myobj = {}
  var myarr = []
  for (var i = 0; i < arr.length; i++) {
    if (!myobj[arr[i]]) {
      myobj[arr[i]] = true
      myarr.push(arr[i])
    }
  }
  return myarr
}

// merge two sorted array?

// Swap two numbers without using a temp variable?

// Reverse a string in JavaScript?

function reverse (string) {
	return string.split('').reverse().join('')
}

// How would you reverse words in a sentence?

// Reverse words in place?

// Find the first non repeating char in a string?

// Remove duplicate characters from a sting?

// How will you verify a word as palindrome?

// Generate random between 5 to 7 by using defined function.

// Find missing number from unsorted array of integers.

// Get two numbers that equal to a given number?

// Find the largest sum of any two elements?

// Total number of zeros from 1 upto n?

// Check whether a given string is a substring of bigger string

// Get permutaitons of a string
