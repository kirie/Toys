//  https://www.hackerrank.com/challenges/beautiful-binary-string

function main() {
  const n = parseInt(readLine());
  const B = readLine();
  let count = 0;
  let replace = 0;
  while (count < n) {
    if (B.slice(count, count + 3) === '010') {
      count += 3;
      replace++;
    }
    else {
      count++;
    }
  }
  console.log(replace);
}