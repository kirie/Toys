// Write a function that takes a string and outputs the string with alternating spaces and commas
// inserted in between each character.  Space first, then comma.

const expect = require('expect');

const altSpaceComma = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result.concat(i % 2 ? str[i].concat(',') : str[i].concat(' '));
  }
  return result;
};


// Test


const testFunction = () => {
  expect(
    altSpaceComma('hello')
  ).toEqual('h e,l l,o ');
  expect(
    altSpaceComma('The quick brown fox jumped over the lazy dogs')
  ).toEqual('T h,e  ,q u,i c,k  ,b r,o w,n  ,f o,x  ,j u,m p,e d,  o,v e,r  ,t h,e  ,l a,z y,  d,o g,s ');
};

testFunction();
console.log('All tests passed');
