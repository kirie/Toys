// https://www.hackerrank.com/challenges/funny-string

'use strict';

function processData (input) {
  let arr = input.split('\n').splice(1);
  arr.forEach((v) => {
    let result = v.split('')
      .map((v) => {return v.charCodeAt(0);})
      .map((v,i,a) => {return Math.abs(v - a[i+1]);})
      .filter((p) => {return !Number.isNaN(p);});
    console.log(result.join('') === result.reverse().join('') ? 'Funny' : 'Not Funny');
  });
}

let testcase1 = '2\nacxz\nbcxz';
processData(testcase1);