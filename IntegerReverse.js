// Given a positive integer, reverse the number
// DO NOT CONVERT TO A STRING OR ARRAY
// Only use Integers and Math methods
// Example Input: 1234
// Expected Output: 4321
const integerReverse = (n) => {
  let result = 0
  while(n !== 0){
    result = result*10
    result = result + n%10
    n = Math.floor(n/10)
  }
  return result
}

// Multiply the result by 10 to shift the number over
// Then we add the modulo or remainder of n/10
// As long as n !== 0 it will continue in the loop
