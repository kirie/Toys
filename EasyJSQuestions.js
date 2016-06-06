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
/** O(n^2) **/

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

function mergeSorted (a, b) {
  var c = []
  while (a.length && b.length) {
    while (b[0] <= a[0]) {
      c.push(b.shift())
    }
    while (a[0] <= b[0]) {
      c.push(a.shift())
    }
  }
  if (a.length) {
    c.push(a)
  }
  else {
    c.push(b)
  }
  return [].concat.apply([], c)
}

// Swap two numbers without using a temp variable?

function swapnum (x, y) {
  // (1 , 3)
  // x = -2
  x = x - y
  // y = 1
  y = x + y
  // x = 1 - (-2) or 3
  x = y - x
  return '(' + x + ',' + y + ')'
}

// Reverse a string in JavaScript?

function reverse (string) {
  return string.split('').reverse().join('')
}

// How would you reverse words in a sentence?

function reversewords (string) {
  return string.split(' ').reverse().join('').split('').reverse().join('')
}

// Reverse words in place?

// Find the first non repeating char in a string?
function nonrepeatchar (str) {
  var myobj = {}
  for (var i = 0; i < str.length; i++) {
    if (myobj[str[i]]) {
      myobj[str[i]]++
    }
    else {
      myobj[str[i]] = 1
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (myobj[str[i]] === 1) {
      return str[i]
    }
  }
}

// Remove duplicate characters from a sting?
function removeDuplicate (str) {
  var myobj = {}
  var myarr = []
  for (var i = 0; i < str.length; i++) {
    if (myobj[str[i]]) {
      myobj[str[i]]++
    }
    else {
      myobj[str[i]] = 1
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (myobj[str[i]] === 1) {
      myarr.push(str[i])
    }
  }
  return myarr
}

// How will you verify a word as palindrome?
function builtinPali (string) {
  if (string === string.split('').reverse().join('')) {
    return true
  }
  return false
}

// Generate random between 5 to 7 by using defined function.
function randomZeroto5 () {
  return Math.random() * 4 + 1
}

function one2seven () {
  return (randomZeroto5() / 5) * 7
}

// Find missing number from unsorted array of integers.
function missingNum (arr) {
  // +1 for missing number
  var n = arr.length + 1
  var sum = 0
  var expect = (n * (n + 1)) / 2
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return expect - sum
}

// Get two numbers that equal to a given number?

function sum2 (arr, sum) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      }
    }
  }
  return false
}

// Find the largest sum of any two elements?


// Total number of zeros from 1 upto n?


// Check whether a given string is a substring of bigger string


// Get permutaitons of a string
function permutate (str) {
  var results = {}
  function recurse (build, options) {
    if (build.length === str.length) {
      results[build] = true
    }
    for (var i = 0; i < options.length; i++) {
      var temp = build + options[i]
      recurse(temp, options.slice(0, i) + options.slice(i + 1))
    }
  }
  recurse('', str)
  return results // as object, but can return as array too with another loop or changing the results data type
}
