// Verify a prime number?

function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// prime(151) // TRUE

// Find all prime factors of a number?

function primeFactors(num) {
  const results = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      results.push(i);
    }
  }
  return results.filter(v => prime(v));
}

// primefactors(69) // [3, 23]

// Get nth Fibonacci number?
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Find the greatest common divisor of two numbers?

function gcd (x, y) {
  while (y !== 0) {
    let z = x % y;
    x = y;
    y = z;
  }
  return x;
}

// Remove duplicate members from an array?

function removeDups (arr) {
  return arr.filter((a, b) => {
    return arr.indexOf(a) === b;
  });
}
// [1,2,3,4,5]
/** O(n^2) **/

function removeDups2 (arr) {
  const myobj = {};
  const myarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!myobj[arr[i]]) {
      myobj[arr[i]] = true
      myarr.push(arr[i])
    }
  }
  return myarr;
}

// merge two sorted array?

function mergeSorted (a, b) {
  let c = []
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
  return string.split('').reverse().join('');
}

// How would you reverse words in a sentence?

function reversewords (string) {
  return string.split(' ').reverse().join('').split('').reverse().join('');
}

// Reverse words in place?

// Find the first non repeating char in a string?

function firstNonRep(str) {
  const arr = str.split('');
  const obj = {};
  let answer;
  arr.forEach((v) => {
    obj[v] = obj[v] ? obj[v] + 1 : 1;
  });
  arr.some((v) => {
    if (obj[v] === 1) {
      answer = v;
    }
    return obj[v] === 1;
  });
  return answer;
}


// Remove duplicate characters from a sting?
function removeDup(str) {
  let arr = str.split('')
  let myObj = {};
  let myArr = [];
  arr.forEach((v) => {
    myObj[v] = myObj[v] ? myObj[v] + 1 : 1
  });
  return arr.filter((v) => {
    return myObj[v] === 1
  }).join('');
}

// How will you verify a word as palindrome?

function palindrome(str) {
  return str === str.split('').reverse().join('')  
}

// Generate random between 5 to 7 by using defined function.
function one2Five () {
  return Math.floor((Math.random() * 5) + 1)
}

function one2seven () {
  const roll = one2Five()
  return roll <=5 ? roll : one2seven()
}

// Find missing number from an array of infinite series integers starting with 1
// ex [1,2,3,4,5,7] // missing 6
function missingNum (arr) {
  // +1 for missing number
  let n = arr.length + 1
  let sum = 0
  let expect = (n * (n + 1)) / 2
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return expect - sum
}

// Get two numbers from an array that equal to a given sum?
// [3,1,4,5], 8  is true
function sum(arr, sum) {
  const hash = {};
  return arr.some((v) => {
    if (hash[v]) {
     return true;
    }
    hash[sum - v] = true;
    return false;
  })
}

// Find the largest sum of any two elements?
function large2 (arr) {
  let big1 = arr[0];
  let big2 = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > big1) {
      big2 = big1;
      big1 = arr[i];
    }
    else if (arr[i] > big2) {
      big2 = arr[i];
    }
  }
  return big1 + big2;
}

// Check whether a given string is a substring of bigger string

function subcheck (str, sub){
  return str.indexOf(sub) > -1;
}

// Get permutaitons of a string
function permutate (str) {
  let results = {}
  function recurse (build, options) {
    if (build.length === str.length) {
      results[build] = true;
    }
    for (var i = 0; i < options.length; i++) {
      var temp = build + options[i]
      recurse(temp, options.slice(0, i) + options.slice(i + 1))
    }
  }
  recurse('', str);
  return results // as object, but can return as array too with another loop or changing the results data type
}

// Find the index of the first duplicate in a given array

function duplicateIndex(arr) {
  const myobj = {};
  let index;
  arr.some((v, i) => {
    myobj[v] = myobj[v] ? myobj[v] + 1 : 1;
    if (myobj[v] > 1) {
      index = i;
    }
    return myobj[v] > 1;
  });
  return index ? index : 'None found';
}
