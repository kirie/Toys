function spiralTraversal (matrix) {
  let result = []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (top <= bottom && left <= right) {

    // take the top line of the matrix
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // take the remaining elements on the right.  No corner!
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    // take the bottom row items
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }

    // take the items on the leftside
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }

  }
  return result
}

const x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const y = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
spiralTraversal(x)
spiralTraversal(y)
