// create a RGB array from a hex value
const expect = require('expect');

function hexToRGB(hex) {
  hex = hex.trim();

  if (hex[0] === '#') {
    hex = hex.replace('#', '');
  }

  if (!valid(hex)) {
    throw new Error('Incorrect Hex');
  }

  const RGB = [];
  const r = parseInt(hex.substring(0, 2), 16);
  RGB.push(r);
  const g = parseInt(hex.substring(2, 4), 16);
  RGB.push(g);
  const b = parseInt(hex.substring(4, 6), 16);
  RGB.push(b);
  return RGB;
}

function valid(str) {
  const re = /[0-9A-Fa-f]{6}/g;
  return re.test(str);
}

const testFunc = () => {
  expect(
    hexToRGB('ff00ff')
  ).toEqual([255, 0, 255]);
  expect(
    hexToRGB('#ff00ff')
  ).toEqual([255, 0, 255]);
};

testFunc();
console.log('All tests passed');
