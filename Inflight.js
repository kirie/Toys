'use strict';
const expect = require('expect');

const movieFlight = (movie_arr, flight_length) => {
  let hash = {};
  return !movie_arr.every((v) => {
    if(hash[flight_length - v]){
      return false;
    }
    hash[v] = true;
    return true;
  });
};


const testFunction = () => {
  expect(
    movieFlight([90,120,105,50,163,140,110,85], 155)
  ).toEqual(true);
  expect(
    movieFlight([90,120,105,51,163,140,110,85], 155)
  ).toEqual(false);
};

testFunction();
console.log('All tests passed');
