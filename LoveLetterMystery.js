// https://www.hackerrank.com/challenges/the-love-letter-mystery

function processData (input) {
  let x = input.split('\n').splice(1)
  x.forEach(function (y) {
    let count = 0
    let z = y.split('').map((char) => { return char.charCodeAt(0) })
    while (z.length > 1) {
      count += Math.abs(z.shift() - z.pop())
    }
    console.log(count)
  })
}
