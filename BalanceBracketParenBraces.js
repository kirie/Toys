// Balance the Parenthesis/Brackets/Braces
// Such that:
// '( ) [ ] { }' = true
// '[ { ] }' = false

const expect = require('expect');

function balance(values) {
  const diffy = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  return values.map((eachString) => {
    const result = [];
    eachString.split('').forEach((v) => {
      if (v === '(' || v === '{' || v === '[') {
        result.push(v);
      }
      if (v === ')' || v === '}' || v === ']') {
        if (diffy[result[result.length - 1]] === v) {
          result.pop();
        }
      }
    });
    if (result.length > 0) {
      return false;
    }
    return true;
  }).join('\n');
}

// Test

const testBalance = () => {
  expect(
    balance(['[ { }', '[]'])
  ).toEqual('false\ntrue');

  expect(
    balance(['{[ [] ] }'])
  ).toEqual('true');
};

testBalance();
console.log('All tests passed');
