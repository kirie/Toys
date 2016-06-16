// Balance the Parenthesis/Brackets/Braces
// Such that:
// '( ) [ ] { }' = true
// '[ { ] }' = false

const match = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function balance (string) {
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      result.push(string[i])
    }
    if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      let popped = result.pop()
      console.log(popped)
      console.log(string[i])
      if (string[i] !== match[popped]) {
        return false
      }
    }
  }
  return true
}

balance('[ { ] }')
