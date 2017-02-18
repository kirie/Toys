// Write a function that takes an input string and determines if the 
// parenthesis are balanced.

const expect = require('expect');

function balanceOnlyParens(str) {
  return !str.split('').reduce((p, v) => {
    if (p < 0) {
      return p;
    }
    if (v === '(') {
      return ++p;
    }
    if (v === ')') {
      return --p;
    }
    return p;
  }, 0);
}
console.log(balanceOnlyParens('(()'));
const testBalanceParens = () => {
  expect(
    balanceOnlyParens('(())')
  ).toEqual(true);

  expect(
    balanceOnlyParens(')(')
  ).toEqual(false);
};

testBalanceParens();
console.log('All tests passed');
