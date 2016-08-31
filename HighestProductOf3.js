// Given an array of integers, find the highest product of 3 values.

'use strict';

let arr_test = [1, 10, -5, 1, -100]; // 5000

const highestProduct3 = (arr) => {
  let greatest_3 = arr[0] * arr[1] * arr[2];
  let greatest_2 = arr[0] * arr[1];
  let lowest_2 = arr[0] * arr[1];
  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);

  for(let i = 2; i < arr.length; i++)  {
    greatest_3 = Math.max(greatest_3, greatest_2 * arr[i], arr[i] * lowest_2);
    greatest_2 = Math.max(greatest_2, arr[i] * highest, arr[i] * lowest);
    lowest_2 = Math.min(lowest_2, arr[i] * lowest, arr[i] * highest);
    highest = Math.max(highest, arr[i]);
    lowest = Math.min(lowest, arr[i]);
  }
  return greatest_3;
};

let result = highestProduct3(arr_test);
console.log(result); // 5000