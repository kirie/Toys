// https://www.hackerrank.com/challenges/jumping-on-the-clouds

function main () {
  var n = parseInt(readLine());
  c = readLine().split(' ');
  c = c.map(Number);
  let jumps = 0;
  let i = 0;
  while(i < c.length-1){
    if (c[i+1] === 1 || (c[i+1] === 0 && c[i+2] === 0)){
      i+=2;
      jumps++;
    }
    else {
      jumps++;
      i++;
    }
  }
  console.log(jumps);
}