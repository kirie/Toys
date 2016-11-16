// Balance the Parenthesis/Brackets/Braces
// Such that:
// '( ) [ ] { }' = true
// '[ { ] }' = false

const expect = require('expect');

const match = {
  '(': ')',
  '[': ']',
  '{': '}'
};

function balance(string) {
	//  create a variable to hold our stack
  const result = [];
  //  loop through the string and see if the char is an open or closed
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      result.push(string[i]);
    }
    if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      // if the char is a closing one, pop off the stack and check if it maches
      const popped = result.pop();
      // if the char doesn't match up with the match object then we know it's false
      if (string[i] !== match[popped]) {
        return false;
      }
    }
  }
  // else return true
  return true;
}


// Test


const testBalance = () => {
  expect(
    balance('[ { ] }')
  ).toEqual(false);

  expect(
    balance('{[ [] ] }')
  ).toEqual(true);
};

testBalance();
console.log('All tests passed');
