//

const expect = require('expect');

function rotationPoint(words) {
  const first = words[0];
  let floor = 0;
  let ceiling = words.length - 1;
  while (floor < ceiling) {
    const mid = Math.round((ceiling - floor) / 2) + floor;
    if (words[mid].localeCompare(first) > 0) {
      floor = mid;
    }
    else {
      ceiling = mid;
    }
    if (floor + 1 === ceiling) {
      return ceiling;
    }
  }
}


// Test


const testFunction = () => {
  expect(
    rotationPoint(['dog', 'hippomoztimus', 'mammoth', 'parrot', 'zebra', 'ant', 'cat'])
  ).toEqual(5);
};

testFunction();
console.log('All tests passed');


