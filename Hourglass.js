//  Find the greatest sum of an hourglass pattern in a defined 6x6 matrix
//  An hourglass pattern is a 3x3 matrix that looks like this:
//  1 1 1
//  0 1 0
//  1 1 1
//
//  However, it could also look like this:
//  1 0 0
//  0 0 0
//  1 0 0

const matrix = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]

const hourglass = (arr) => {
  let sum
  let greatest
  // loop through from the left and only use the upper left position of a 3x3.  Therefore in a 6x6 we only need to see the 4x4.
  // From the upper left of a 3x3 we can calculate the hourglass shape
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // sum the hourglass shape from the upper left corner
      sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
        + arr[i + 1][j + 1]
        + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      // if we don't have a greatest, then we set it to the first value
      if (greatest === undefined) {
        greatest = sum
      }
      // otherwise if the sum is greater than the current greatest then we make greatest = sum
      else if (sum > greatest) {
        greatest = sum
      }
    }
  }
  // return the value
  return greatest
}

hourglass(matrix)
