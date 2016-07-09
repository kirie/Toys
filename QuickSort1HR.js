// https://www.hackerrank.com/challenges/quicksort1

function processData (input) {
  let input_arr = input.split('\n')[1].split(' ').map((z) => { return parseInt(z) })
  let left = []
  let right = []
  let p = input_arr.splice(0, 1)
  input_arr.forEach((x) => { x > p ? right.push(x) : left.push(x) })
  console.log(...left, ...p, ...right)
}
