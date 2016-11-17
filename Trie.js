// Trie Class.  Prototypal Pattern

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
};

testFunction();
console.log('All tests passed');
