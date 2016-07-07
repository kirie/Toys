//  https://www.hackerrank.com/challenges/save-the-prisoner

function processData (input) {
  let input_array = input.split('\n').map((z) => {return z.split(' ')})
  input_array.splice(0, 1)
  input_array.forEach((x) => {
    let z = (parseInt(x[2]) + parseInt(x[1] -1)) % parseInt(x[0])
    console.log(z === 0 ? x[0] : z)
    })
}

// Treats + Starting Value(index so -1) % Prisoners
