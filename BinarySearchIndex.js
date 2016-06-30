// Given an array, tree, find the index of the target value

const BinarySearchIndex = (tree, target) => {
  let min = 0
  let max = tree.length - 1
  while (min <= max) {
    let half = Math.floor((min + max) / 2)
    if (tree[half] === target) {
      return half
    }
    else {
      if (tree[half] < target) {
        min = half + 1
      }
      else {
        max = half - 1
      }
    }
  }
  return -1
}

let arr = [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
BinarySearchIndex(arr, 18) // 7
