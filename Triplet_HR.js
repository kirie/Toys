// https://www.hackerrank.com/challenges/compare-the-triplets

'use strict';
function main() {
  var a0_temp = readLine().split(' ').map(Number);
  var a0 = parseInt(a0_temp[0]);
  var a1 = parseInt(a0_temp[1]);
  var a2 = parseInt(a0_temp[2]);
  var b0_temp = readLine().split(' ').map(Number);
  var b0 = parseInt(b0_temp[0]);
  var b1 = parseInt(b0_temp[1]);
  var b2 = parseInt(b0_temp[2]);
  let a0_result = a0_temp.map((v, i) => {return v - b0_temp[i] > 0 ? 1 : 0;}).reduce((a,b) => {return a+b;});
  let b0_result = b0_temp.map((v, i) => {return v - a0_temp[i] > 0 ? 1 : 0;}).reduce((a,b) => {return a+b;});
  console.log(a0_result, b0_result);
}

