// https://www.hackerrank.com/challenges/alternating-characters
// Given a string of alternating A's and B's
// Find the number of deletions so that only alternating characters exist

// Example:
// Input: const x = '5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB'
// Output: 4\n3\n0\n0\n4

function processData (input) {
  let arr1 = input.split('\n').splice(1)
  for (let i = 0; i < arr1.length; i++) {
    let count = 0
    let last = arr1[i][0]
      for (let j = 1; j < arr1[i].length; j++) {
        last === arr1[i][j] ? count++ : last = arr1[i][j]
        }
      }
    console.log(count)
  }
}
