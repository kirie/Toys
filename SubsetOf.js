// Make an an extension Array method that returns true if an array is a subset of another array

// Example:
// [13,4,5,5] is a subset of [5,2,4,13,4,5,5,9]
// [cat, dog] is a subset of [cat, dog, horse, snake]
// [dog] is not a subset of [rabbit, monkey, llama]

Array.prototype.isSubsetOf = function(x) {
  return this.every((currval) => {
    return x.indexOf(currval) >= 0
  })
}

// The 'every' Array method returns true if all tests are true.
// In this case we then test every current value and return true for each indexOf > 0(true)
// Otherwise we return false and the return  evaluates to false
