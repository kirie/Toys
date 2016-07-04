// https://www.hackerrank.com/challenges/equal-stacks

function main() {
    var n1_temp = readLine().split(' ');
    var n1 = parseInt(n1_temp[0]);
    var n2 = parseInt(n1_temp[1]);
    var n3 = parseInt(n1_temp[2]);
    h1 = readLine().split(' ');
    h1 = h1.map(Number).reverse();
    h2 = readLine().split(' ');
    h2 = h2.map(Number).reverse();
    h3 = readLine().split(' ');
    h3 = h3.map(Number).reverse();

    let a = h1.reduce((x,y) => {return x+y})
    let b = h2.reduce((x,y) => {return x+y})
    let c = h3.reduce((x,y) => {return x+y})
    while(!(a === b && a === c)) {
      let largest = Math.max(a,b,c)
      if(largest === a) {
        a-=h1.pop()
      }
      else if (largest === b){
        b-=h2.pop()
      }
      else if(largest === c) {
        c-=h3.pop()
      }
    }
    console.log(a)
}
