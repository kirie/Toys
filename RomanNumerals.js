// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return "null" on invalid input.
var translateRomanNumeral = function (romanNumeral) {

  // create an object to roman numerals
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  var sum = 0
  // loop through the input numeral
  for (var i = 0; i < romanNumeral.length; i++) {
    // If the object numeral exists enter the loop
    if (DIGIT_VALUES[romanNumeral[i]]) {
      //  if current value is less than the next value, then subtract the value
      if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
        sum -= (DIGIT_VALUES[romanNumeral[i]])
      }
      else {
      //  otherwise add it
      sum+=(DIGIT_VALUES[romanNumeral[i]])
      }
    }
    else {
      //  if no input, then return null
      return 'null'
    }
  }
  return sum
}
