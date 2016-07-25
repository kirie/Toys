// https://www.hackerrank.com/challenges/funny-string

'use strict';

function processData (input) {
  let arr = input.split('\n').splice(1);
  arr.forEach((estring) => {
    let result = estring.split('')
      .map((cv, i) => {return Math.abs(estring.charCodeAt(i) - estring.charCodeAt(i + 1));})
      .filter((x) => {return !Number.isNaN(x);});
    console.log(result.join('') === result.reverse().join('') ? 'Funny' : 'Not Funny');
  });
}

let testcase1 = '2\nacxz\nbcxz';
processData(testcase1);
