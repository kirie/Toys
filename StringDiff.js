// 1. Given two strings, find total differences in characters.  No Duplicates

const diff2 = (str1, str2) => {
  let count = 0
  let obj1 = {}
  let obj2 = {}
  str1.split('').map((x) => {obj1[x] = obj1[x] ? obj1[x]+=1 : 1})
  str2.split('').map((x) => {obj2[x] = obj2[x] ? obj2[x]+=1 : 1})
  for (let key in obj1) {
    if (key in obj2) {
      if (obj1[key] > 1 || obj2[key] > 1) {
        if (Math.abs(obj1[key] - obj2[key]) !== 0) {
          count+= Math.abs(obj1[key] - obj2[key])
        }
        else {
          count++
        }
      }
      else {
        count++
      }
    }
  }
  return 'Characters in common without duplicates: ' + count
}

diff2('coffee', 'fate') // 2
diff2('hello', 'haisjfllallkfj') // 3

// 2. Given two strings, count the number of character differences IN ORDER
// In other words substring... without using substr or substring

// Array method
const diff = (str1, str2) => {
  let count = 0
  let a = str1.split('')
  let b = str2.split('')
  while (a.length && b.length) {
    if (a.splice(0, 1)[0] !== b.splice(0, 1)[0]) {
      count++
    }
  }
  if (a.length || b.length) {
    count+= a.length + b.length
  }
  return count
}

diff('hello', 'hellooOoOO') // 8 different chars in order
