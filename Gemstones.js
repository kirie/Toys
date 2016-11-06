// https://www.hackerrank.com/challenges/gem-stones/

function processData (input) {
  let x = input.slice().split('\n').splice(1).map((y) => { return y.split('');});
  let y = x.reduce((a, b) => b.filter((z) => a.includes(z)));
  let z = y.filter((a, b, c) => { return c.indexOf(a) === b });
  console.log(z.length);
}

// line x creates an array of individual chars within another array like [['a','b'],['a','c']]
// line y reduces all the arrays into an array with common characters ['a']
// line z removes duplicates from our array
// return the length of z
