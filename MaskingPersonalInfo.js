// Leetcode #831 https://leetcode.com/problems/masking-personal-information/description/

const expect = require('expect')

const mask = (str) => validateEmail(str) ? email(str) : phone(str)

function email(str) {
  str = str.toLowerCase()
  const index = str.indexOf('@')
  return `${str[0]}*****${str.slice(index - 1)}`
}

function phone(str) {
  const nums = str.match(/\d+/g).join('')
  const rest = nums.slice(-4)
  let s = ''
  for (let i = 0; i < nums.length - 10; i++) {
    s += '*'
  }
  return s ? `+${s}-***-***-${rest}` : `***-***-${rest}`
}

function validateEmail(email) {
  let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regx.test(String(email).toLowerCase())
}

const testMask = () => {
  expect(
    mask('abc@abc.com')
  ).toEqual('a*****c@abc.com')
  expect(
    mask('2131234567')
  ).toEqual('***-***-4567')
};

testMask()

console.log('All tests passed')
