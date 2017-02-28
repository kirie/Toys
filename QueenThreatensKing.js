// Given a chessboard of any size and the X and Y positions of each the King and Queen
// And knowing the Queen can only move horizontallly, vertically, and diagonally.
// - Find whether the Queen threatens the King's position.
// - Return a 'Error' string on invalid input arguments

const expect = require('expect');

function queenThreatensKing(qX, qY, kX, kY) {
  if (Array(...arguments).every(x => Number.isInteger(x)) && arguments.length === 4) {
    return qX === kX || qY === kY || Math.abs(qX - kX) === Math.abs(qY - kY);
  }
  return 'Error';
}

const testQueenKing = () => {
  expect(
    queenThreatensKing(1, 3, 5, 6)
  ).toEqual(false);
  expect(
    queenThreatensKing(1, 1, 1, 1)
  ).toEqual(true);
  expect(
    queenThreatensKing(8, 2, 4, 6)
  ).toEqual(true);
  expect(
    queenThreatensKing(8.21, 2, 4, 6)
  ).toEqual('Error');
  expect(
    queenThreatensKing(8, 2, 4, 6, 9, 22, 3)
  ).toEqual('Error');
  expect(
    queenThreatensKing(8)
  ).toEqual('Error');
  expect(
    queenThreatensKing('', [], {})
  ).toEqual('Error');
};

testQueenKing();
console.log('All tests passed');
