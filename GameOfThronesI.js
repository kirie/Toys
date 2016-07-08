// https://www.hackerrank.com/challenges/game-of-thrones

function processData (input) {
  let myObj = {}
  input.split('').forEach((x) => { myObj[x] ? myObj[x] += 1 : myObj[x] = 1 })
  let result = Object.keys(myObj).map((y) => { return myObj[y] % 2 }).reduce((x, y) => { return x + y })
  console.log(result > 1 ? 'NO' : 'YES')
}

// Split the string into an object with instance counts
// Count the instances of characters that are odd.  
// If the count of instances is greater than 1, then it can't be a palindrome