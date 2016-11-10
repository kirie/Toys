'use strict';
const expect = require('expect');

const movieFlight = (movie_arr, flight_length) => {
  let hash = {};
  for(let i = 0; i < movie_arr.length; i++){
    let remaining = flight_length - movie_arr[i];
    if(hash[remaining]){
      return true
    }
    hash[movie_arr[i]] = true
  }
  return false
};

const testFunction = () => {
  expect(
    movieFlight([90,120,105,50,163,140,110,85], 155)
  ).toEqual(true);
};

testFunction();
console.log('All tests passed');
