// Given an array of integers between 0 and a maximum, sort
// all the numbers with a constraint of O(n)

// Constraint: O(n)

const expect = require('expect');

function sortScores(arr, max) {
  const scores = new Array(max + 1);
  const sorted = [];

  arr.forEach((v) => {
    scores[v] = ++scores[v] || 1;
  });

  scores.forEach((v, i) => {
    let instances = v;
    while (instances > 0) {
      sorted.push(i);
      instances--;
    }
  });
  return sorted;
}


// Test


const testFunction = () => {
  expect(
    sortScores([20, 5, 30, 40, 10, 99, 30, 80], 100)
  ).toEqual([5, 10, 20, 30, 30, 40, 80, 99]);
};

testFunction();
console.log('All tests passed');
