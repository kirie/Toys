// https://www.hackerrank.com/challenges/reduced-string

function processData (input) {
  let str1 = input
  let str2 = removal(input)
  while (str1 !== str2) {
    str1 = str2
    str2 = removal(str1)
  }
  function removal (str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2)
      }
    }
    return arr.join('')
  }
  console.log(str2.length === 0 ? 'Empty String' : str2)
}
