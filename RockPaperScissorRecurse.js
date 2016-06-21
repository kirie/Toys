// Given the number of rounds in a RPS game, find all the possibilities
// for that number of rounds
// Input: 1, Output: ['r', 'p' ,'s']
// Input: 2, Output: ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
// Input: 0, Output: []

const rps = (roundCount) => {
	// choices in an array
  let options = ['r', 'p', 's']
  let result = []
  // recursive function that takes in a string.  build length should be
  // the same as the roundCount
  const recurse = (build) => {
  	// Base: if the round is equal to the length of the build, we push to array.
    if (roundCount === build.length) {
      result.push(build)
      return
    }
    // Loop through the choices and keep adding choices
    for (let i = 0; i < options.length; i++) {
    	// pass in the current build and recurse
      recurse(build + options[i])
    }
  }
  // As long as round count is > 0, then recurse with an empty string
  if (roundCount > 0) {
    recurse('')
  }
  return result
}

rps(3)
