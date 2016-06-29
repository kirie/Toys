// Implement mergesort

const mergesort = (arr) => {
  let result = []
  let half = Math.floor(arr.length / 2)
  let left = arr.slice(0, half)
  let right = arr.slice(half)
  if (arr.length < 2) {
    return arr
  }
  const glue = (left, right) => {
    while (left.length && right.length) {
      left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
    }
    while (left.length) {
      result.push(left.shift())
    }
    while (right.length) {
      result.push(right.shift())
    }
  }
  glue(mergesort(left), mergesort(right))
  return result
}

mergesort([1, 2, -3, 100, 20, 93, 5])
