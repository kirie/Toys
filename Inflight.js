// Build an in-flight entertainment system that allows users to 
// know(with a returned boolean) whether there are 2 movies that exactly
// fit into the full flight length.  

// Constraint: O(n)

// Example: Given an array of 3 movies [60, 120, 80] and a 200 min
//          flight, it should return a boolean of true. Since 120+80
//          is 200 min.  

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
