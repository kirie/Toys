// Trie Class.  Prototypal Pattern
// Methods: add, search, display

const expect = require('expect');

const trieMethods = {};

const trieClass = function trieClass() {
  const trie = Object.create(trieMethods);
  trie.root = {};
  return trie;
};

trieMethods.add = function add(str) {
  let current = this.root;
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in current)) {
      current[str[i]] = {};
    }
    current = current[str[i]];
  }
  current.$ = null;
};

trieMethods.search = function search(term) {
  let current = this.root;
  const term2 = `${term}$`;
  for (let i = 0; i < term2.length; i++) {
    if (!(term2[i] in current)) {
      return false;
    }
    current = current[term2[i]];
  }
  return true;
};

trieMethods.display = function display() {
  return this.root;
};


// Test


const testFunction = () => {
  const testTrie = trieClass();
  testTrie.add('apple');
  testTrie.add('apply');

  expect(
    testTrie.display()
  ).toEqual({ a: { p: { p: { l: { e: { $: null }, y: { $: null } } } } } });

  expect(
    testTrie.search('apple')
  ).toEqual(true);

  expect(
    testTrie.search('apples')
  ).toEqual(false);
};

testFunction();
console.log('All tests passed');
