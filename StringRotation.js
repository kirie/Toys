// Given two strings, see if one of them is a rotation of another.
//   Example:
//
//   Given: 'ABCD', 'CDAB'
//   Return: true

const expect = require('expect');

function strRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).indexOf(str2) > -1;
}


// Test


const teststrRotation = () => {
  expect(
    strRotation('ABCD', 'CDAB')
  ).toEqual(true);

  expect(
    strRotation('ABCD', 'ACBD')
  ).toEqual(false);
};

teststrRotation();
console.log('All tests passed');
