// Given a floating point number, return a string with the decimal/comma places.
// The first argument should be a floating number and the second argument should
// be a boolean value with true meaning commas separating the placement and a point(.)
// separating the decimal values.

// ie. func(3923.202, true) should return '3,923.20'
// ie. func(3932.149, false) should return '3.932,15'

const expect = require('expect');

function formatCurrency(amountFloat, usAsia) {
  let whole = (~~amountFloat).toString();
  const preciseRound = (amountFloat - whole).toPrecision(2);
  const remainder = (Math.round((preciseRound) * 100) / 100).toString();
  const separator1 = usAsia ? ',' : '.';
  const separator2 = usAsia ? '.' : ',';
  let len = whole.length;
  let place = 0;
  while (--len) {
    place += 1;
    if (place % 3 === 0) {
      whole = whole.substr(0, len) + separator1 + whole.substr(len);
    }
  }
  return whole + separator2 + remainder.slice(2);
}

const testFormatCurrency = () => {
  expect(
    formatCurrency(298423880.035339, true)
  ).toEqual('298,423,880.04');

  expect(
    formatCurrency(98423880.0329, false)
  ).toEqual('98.423.880,03');
};

testFormatCurrency();
console.log('All tests passed');

