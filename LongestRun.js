// Given a string, determine the longest run of repeating characters
// Give the index start and ending points for the longset run.
// if there are multiple longest runs, return the first one.

// ie. 'abbbc' should return [1,3]
// ie. 'mississippi' should return [2,3]
// ie. 'abbccbbb' should return [5,8]

function longestRun (string) {
  let longest = 1
  let count = 1
  let index = 0
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++
    }
    else {
      if (count > longest) {
        longest = count
        index = i - count
      }
      count = 1
    }
  }
  return [index, index + longest - 1]
}
