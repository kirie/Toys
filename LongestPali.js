// Find the longest palindrome in a given string.
// For example: 'My dad is a racecar athlete'
// The longest palindrome is 'a racecar a'
// whitespaces count

const longestPali = (str) => {
  let longest = ''
  if (paliCheck(str)) {
  	return true
  }
  // loop through from the first character, and slice out that character
  for (let i = 0; i < str.length; i++) {
    let sub = str.slice(i)
    // Now we have a sliced out character and slice out the last character and compare
    for (let i = 0; i < sub.length; i++) {
      let sub2 = sub.substr(0, i)
      // if it is a palindrome and the length is greater than our previous, we set the value
      if (paliCheck(sub2) && sub2.length > longest.length) {
        longest = sub2
      }
    }
  }
  return longest
}

const paliCheck = (str) => {
  return str.split('').reverse().join('') === str
}

longestPali('my dad is a racecar athlete')
