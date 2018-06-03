// https://leetcode.com/problems/goat-latin/description/

const expect = require('expect');

const toGoatLatin = (S) => {

  const splitwords = S.split(' ');
  const length = splitwords.length;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return splitwords.map((v, i) => {
    const firstletter = v.slice(0, 1);

    // see if the first letter is a vowel or consonant
    const goated = vowels.includes(firstletter.toLowerCase()) ? vowelma(v) : consonant(v);
    const lettera = 'a'.repeat(i + 1);
    return `${goated}${lettera}`;
  }).join(' ');
};

// add 'ma' to vowel strings
const vowelma = (str) => {
  return `${str}ma`;
};

// For consonants, put the first letter in the back and add 'ma'
const consonant = (str) => {
  const slice = str.split('').splice(0, 1).join('');
  const sliced = str.split('').splice(1).join('');
  return `${sliced}${slice}ma`;
};

const testGoats = () => {
  expect(
    toGoatLatin('I speak Goat Latin')
  ).toEqual('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
  expect(
    toGoatLatin('The quick brown fox jumped over the lazy dog')
  ).toEqual('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa');
};

testGoats();

console.log('All tests passed');
