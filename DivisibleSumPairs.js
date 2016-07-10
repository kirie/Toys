// https://www.hackerrank.com/challenges/divisible-sum-pairs

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    let count = 0
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (i < j && (a[i] + a[j]) % k === 0) {
          count++
        }
      }
    }
    console.log(count)
}
