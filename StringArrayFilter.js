'use strict';

// Given Input:   
let testcase1 = 'abes, bvg xv, gt  ab';
// Expected Ouput:  ['abes', 'bvg', 'xv', 'gt', 'ab']

function filtercommas (input) {
  return input.split(',').join('').split(' ').filter((val) => {return val.length > 0;});
}

function filtercommasRegex (input) {
  return input.split(/[\s,]+/);
}

console.log(filtercommas(testcase1));
console.log(filtercommasRegex(testcase1));