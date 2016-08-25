// https://leetcode.com/problems/palindrome-number/
// Determine whether an integer is a palindrome.  Do this without extra space.
'use strict';

function numPali (num) {
  let value = 1;
  if(num < 0) {
    return false;
  }

  // determine the number of places in our number 
  while(num/value > 10) {
    value*=10;
  }
  
  while(num > 0) {
    // compare first and last digits
    if(Math.floor(num/value) === num%10){
      // change values.
      num = Math.floor((num%value)/10);
      value = Math.floor(value/100);
    }
    else {
      return false;
    }
  }
  return true;
}
numPali(2992);
// With space and using toString().
function numPali2 (num) {
  return parseInt(num.toString().split('').reverse().join('')) === num;
}
