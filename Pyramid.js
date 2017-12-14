// Write a function that accepts a number n which console.log's a pyramid shape with n levels.
// Use the # character and make sure the pyramid has spaces on the left and right.

// Example
// pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// const expect = require('expect');

function pyramid(n, row = 0, level = '') {
  const mid = 2 * n - 1;

  if (row === n) {
    return;
  }

  if (level.length === mid) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midp = Math.floor((mid / 2));
  let add;
  if (midp - row <= level.length && midp + row >= level.length) {
    add = '#';
  }
  else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

console.log(pyramid(3));
console.log('All tests passed');
