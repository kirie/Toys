
// Write a function that takes a number as its argument and returns a string that represents that number’s
// simplified fraction.  Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter (number) {
  // check if it is already an integer
  if (Number.isInteger(number / 1)) {
    return number + '/' + 1
  }
  // start at 2 because dividing by 1 would return the same number
  var count = 2

  var flag = true
  // loop while the flag variable is true.  Multiply by the count to see if it becomes an integer
  while(flag) {
    var num = (number * count)
    // if it becomes an integer than we set our variables to enter the gcd
    if (Number.isInteger(num)) {
      var x = (number * count)
      var y = (count)
      // exit out of the loop
      flag = false
    }
    else {
      count++
    }
  }
  // find the gcd, divide the x and y by it and return it for the final fraction
  var gcd2 = gcd(x, y)
  return x / gcd2 + '/' + y / gcd2
}

// a great recursive greatest common divisor function from stackoverflow
var gcd = function (a, b) {
  if (!b) {
    return a
  }
  return gcd(b, a % b)
}
