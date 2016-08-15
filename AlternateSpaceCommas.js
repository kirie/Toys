// Write a function that takes a string and outputs the string with alternating spaces and commas
// inserted in between each character

'use strict';

function altSpaceComma (string) {
  let result = '';
  string.forEach((v, i) => {
    result = result.concat(i % 2 ? string[i].concat(',') : string[i].concat(' '));
  });
  return result;
}

console.log(altSpaceComma('abc'))