const expect = require('expect');
const BinaryTree = require('./BinarySearchTree');

function twoEqualBST(bst1, bst2) {
  if (bst1 === null) {
    return bst2 === null;
  }
  if (bst2 === null) {
    return bst1 === null;
  }
  if (bst1.value !== bst2.value) {
    return false;
  }
  if (twoEqualBST(bst1.left, bst2.left) && twoEqualBST(bst1.right, bst2.right)) {
    return true;
  }
  if (twoEqualBST(bst1.left, bst2.right) && twoEqualBST(bst1.right, bst2.left)) {
    return true;
  }
  return false;
}


// Test


const Btree1 = new BinaryTree(3);
Btree1.insert(4);

const Btree2 = new BinaryTree(3);
Btree2.insert(4);

const Btree3 = new BinaryTree(3);
Btree3.insert(9);

const testFunction = () => {
  expect(
    twoEqualBST(Btree1, Btree2)
  ).toEqual(true);
  expect(
    twoEqualBST(Btree1, Btree3)
  ).toEqual(false);
};

testFunction();
console.log('EqualBST tests passed');
