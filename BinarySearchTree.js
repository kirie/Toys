'use strict';

let BST = function (val) {
  let BinaryTree = Object.create(BinarySearchTreeMethods);
  BinaryTree.value = val;
  BinaryTree.left = null;
  BinaryTree.right = null;
  return BinaryTree;
};

let BinarySearchTreeMethods = {}

BinarySearchTreeMethods.insert = function (val) {
  if (val < this.value) {
    if (this.left) {
      this.left.insert(val)
    }
    else {
      this.left = BST(val)
    }
  }
  else if (val > this.value) {
    if (this.right) {
      this.right.insert(val)
    }
    else {
      this.right = BST(val)
    }
  }
  else {
    console.log('Value already exists in this Binary Tree')
  }
}

BinarySearchTreeMethods.contains = function (target) {
  if (target === this.value){
    return true
  }
  else if (target < this.value) {
    if (this.left) {
      this.left.contains(target)
    }
    else {
      return false
    }
  }
  else if (target > this.value) {
    if (this.right) {
      this.right.contains(target)
    }
    else {
      return false
    }
  }
}

BinarySearchTreeMethods.invert = function(root) {
  if(root) {
    let left = root.left ? root.left : null;
    let right = root.right ? root.right : null;
    root.left = root.invert(right);
    root.right = root.invert(left);
  }
  return root;
};


let theBST = new BST(5);
theBST.insert(4);
theBST.insert(8);
console.log(theBST.invert(theBST));