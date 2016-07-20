// https://www.hackerrank.com/challenges/circular-array-rotation
// Two solutions.

function processData (input) {
  let parser = input.split('\n');
  let nkq = parser.shift().split(' ');
  let arr = parser.shift().split(' ').map(Number);
  let mvals = parser.map(Number);
  let k = parseInt(nkq[1]) % parseInt(nkq[0]);
  while(k > 0) {
    arr.unshift(arr.pop());
    k--;
  }
  for(let i = 0; i < mvals.length; i++){
    console.log(arr[mvals[i]]);
  }
}

function processData (input) {
  let parser = input.split('\n');
  let nkq = parser.shift().split(' ');
  let arr = parser.shift().split(' ').map(Number);
  let mvals = parser.map(Number);
  
  let count = 0;
  if(nkq[1] % arr.length !== 0){
    while(count < nkq[1]){
      arr.unshift(arr.pop());
      count++;
    }
  }
  for(let i = 0; i < mvals.length; i++){
    console.log(arr[mvals[i]]);
  }
}