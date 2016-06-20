// Given a string of strings in \n format.  The first string is a number which indicates the number of strings
// The second number is the number of queries. ie. there are 3 queries for 4 strings.
// If they exist, then print the occurances.
// Example

// Input:
//
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
//
// Output:
// 2
// 1
// 0

const test = '4\naba\nbaba\naba\nxzxb\n3\naba\nxzxb\nab'

const occurance = (str) => {
  let myObj = {}
  let arr = str.split('\n')
  let num = parseInt(arr[0])
  // loop through the Array and count occurances putting it into myObj
  for (let i = 1; i <= num; i++) {
    myObj[arr[i]] ? myObj[arr[i]] += 1 : myObj[arr[i]] = 1
  }
  // slice out everything after the second number and then print the occurances
  arr.slice(num + 2).forEach((query) => {
    myObj[query] ? console.log(myObj[query]) : console.log(0)
  })
}

occurance(test)
