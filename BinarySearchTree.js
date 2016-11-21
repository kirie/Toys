// Binary Tree class in a Prototypal pattern.
// Methods: insert, contains, invert, display

const expect = require('expect');

const BinarySearchTreeMethods = {};

const BST = function BST(val) {
  const BinaryTree = Object.create(BinarySearchTreeMethods);
  BinaryTree.value = val;
  BinaryTree.left = null;
  BinaryTree.right = null;
  return BinaryTree;
};

BinarySearchTreeMethods.insert = function insert(val) {
  if (val < this.value) {
    if (this.left) {
      this.left.insert(val);
    }
    else {
      this.left = BST(val);
    }
  }
  else if (val > this.value) {
    if (this.right) {
      this.right.insert(val);
    }
    else {
      this.right = BST(val);
    }
  }
  else {
    console.log('Value already exists in this Binary Tree');
  }
};

BinarySearchTreeMethods.display = function display() {
  return this;
};

BinarySearchTreeMethods.contains = function contains(target) {
  if (target === this.value) {
    return true;
  }
  else if (target < this.value) {
    if (this.left) {
      this.left.contains(target);
    }
    else {
      return false;
    }
  }
  else if (target > this.value) {
    if (this.right) {
      this.right.contains(target);
    }
    else {
      return false;
    }
  }
};

BinarySearchTreeMethods.invert = function invert(root) {
  if (root) {
    const left = root.left ? root.left : null;
    const right = root.right ? root.right : null;
    root.left = root.invert(right);
    root.right = root.invert(left);
  }
  return root;
};


// Test


const testBST = () => {
  const theBST = new BST(5);
  theBST.insert(4);
  theBST.insert(8);

  expect(
    theBST.display().value
  ).toEqual(5);

  expect(
    theBST.contains(5)
  ).toEqual(true);

  expect(
    theBST.display().left.value
  ).toEqual(4);

  expect(
    theBST.invert(theBST).left.value
  ).toEqual(8);
};

testBST();
console.log('All tests passed');

module.exports = BST;
