// https://www.hackerrank.com/challenges/making-anagrams

function processData (input) {
  let obj1 = {}
  let diff = 0
  let str = input.split('\n')
  str[0].split('').map((x) => { obj1[x] ? obj1[x]+=1 : obj1[x] = 1 })
  str[1].split('').map((x) => { obj1[x] ? obj1[x]-=1 : diff++ })
  let x = Object.keys(obj1).map((x) => obj1[x]).reduce((a, b) => { return a + b })
  console.log(x + diff)
}

// Store each character of the first into an object.  Then subtract the instances from the second string.
// All other values of the second string get stored into diff.
