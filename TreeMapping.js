// Tree Mapping
// Implement a map method on this Tree class.

// Map accepts a mapping function as its only argument.
// It traverses the tree, passing each node’s value into the mapping function, and generates a new tree containing the results.

// So map should return a tree with the same structure, and different values, but it should NOT modify the tree that was passed in.

let Tree = function (value) {
  this.value = value
  this.children = []
}

Tree.prototype.map = function (callback) {
  var newTree = new Tree(callback(this.value))
  for (let i = 0; i < this.children.length; i++) {
    newTree.addChild(this.children[i].map(callback))
  }
  return newTree
}
