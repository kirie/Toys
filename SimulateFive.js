const expect = require('expect');

// Simulate a 5 sided die using a 7 sided die function

function random7() {
  return Math.floor(Math.random() * 7) + 1;
}

// This will return an uneven distribution of values, in particular the values 2 and 3
// if random7() returns 7 or 6, performing modulus and adding 1 will give us 2 and 3 twice.
function random5Bad() {
  return random7() % 5 + 1;
}

function random5Better() {
  const roll = random7();
  return roll <= 5 ? roll : random5Better();
}

const test5 = () => {
  expect(
    random5Better()
  ).toBeLessThanOrEqualTo(5);
};

test5();
test5();
console.log('All tests passed');
