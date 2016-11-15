// https://www.hackerrank.com/challenges/alternating-characters
// Given a string of alternating A's and B's
// Find the number of deletions so that only alternating characters exist

// Example:
// Input: const x = '5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB'
// Output: 3\n4\n0\n0\n4

const expect = require('expect');

function processData(input) {
  let output = '';
  const given = input.split('\n').splice(1);
  given.forEach((v) => {
    let count = 0;
    let last = v[0];
    for (let j = 1; j < v.length; j++) {
      last === v[j] ? count++ : last = v[j];
    }
    output = `${output}${count}\n`;
    console.log(count);
  });
  return output;
}

const testRemoveElements = () => {
  expect(
    processData('5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB')
  ).toEqual('3\n4\n0\n0\n4\n');
};

testRemoveElements();
console.log('All tests passed');
