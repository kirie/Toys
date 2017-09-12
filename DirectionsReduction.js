// https://www.codewars.com/kata/directions-reduction/train/javascript

const expect = require('expect')

function dirReduc(arr){
  const diffy = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST' : 'WEST',
    'WEST' : 'EAST'
  };

  return arr.reduce((pv, cv) => {
    if (diffy[cv] === pv[pv.length - 1]) {
      pv.pop();
    }
    else{
      pv.push(cv)
    }
    return pv
  }, [])
}

const testFunc = () => {
  expect(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
  ).toEqual(["WEST"]);
  expect(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])
  ).toEqual([]);
};

testFunc()
console.log('All tests passed')