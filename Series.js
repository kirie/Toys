// Write a recursive function that follows the pattern: 50, 150, 300, 500

const expect = require('expect');

function series(n) {
  if (n === 1) {
    return 50;
  }
  return n * 50 + series(n - 1);
}

const series2 = (n) => (n === 1 ? 50 : n * 50 + series2(n - 1));

const testFunc = () => {
  expect(
    series(1)
  ).toEqual(50);
  expect(
    series(2)
  ).toEqual(150);
  expect(
    series(3)
  ).toEqual(300);
  expect(
    series2(4)
  ).toEqual(500);
  expect(
    series(10)
  ).toEqual(
    series2(10)
  );
};

testFunc();
console.log('All tests passed');
