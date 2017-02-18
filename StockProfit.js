// Given an array of yesterday's stock prices where the index represents minuetes 
// after the stock market has opened and the value is the stock price at that minuete,
// find the greatest profit that could have been made from yesterday's stocks.

'use strict';
const expect = require('expect');

const stock = (arr) => {
  // initial variables
  let minPrice = arr[0];
  let maxProfit = 0;

  arr.forEach((v) => {
    let current = v;
    minPrice = Math.min(minPrice, current);
    maxProfit = Math.max(maxProfit, current - minPrice);
  });
  
  return maxProfit;
};

const testFunction = () => {
  expect(
    stock([500,300,900,400,500,9000,400,400])
  ).toEqual(8700);
  expect(
    stock([200,200,200,200,200,200])
  ).toEqual(0);
};

testFunction();
console.log('All tests passed');
