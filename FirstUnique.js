// https://leetcode.com/problems/first-unique-character-in-a-string/

function firstUnique (str) {
  for(let i = 0; i < str.length; i++){
    // same index then it's unique.
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      return i;
    }
  }
  return 0;
}
