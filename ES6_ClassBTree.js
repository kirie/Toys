const expect = require('expect');

class BinaryTree {
  constructor(options) {
    this.value = options;
    this.left = null;
    this.right = null;
  }

  display() {
    return this;
  }

  insert(val) {
    if (this.value > val) {
      if (this.left) {
        this.left.insert(val);
      }
      else {
        this.left = new BinaryTree(val);
      }
    }
    else if (this.value < val) {
      if (this.right) {
        this.right.insert(val);
      }
      else {
        this.right = new BinaryTree(val);
      }
    }
    else {
      console.log('Could not insert value.  Value could already exist');
    }
  }

  contains(val) {
    if (val === this.value) {
      return true;
    }
    else if (this.value > val) {
      if (this.left) {
        return this.left.contains(val);
      }
      else {
        return false;
      }
    }
    else if (this.value < val) {
      if (this.right) {
        return this.right.contains(val);
      }
      else {
        return false;
      }
    }
  }

  invert(node) {
    if (node) {
      const left = node.left ? node.left : null;
      const right = node.right ? node.right : null;
      node.left = node.invert(right);
      node.right = node.invert(left);
    }
    return node;
  }

  max(node) {
    if (!node) {
      return false;
    }
    if (node.right) {
      return this.max(node.right);
    }
    return node.value;
  }

  min(node) {
    if (!node) {
      return false;
    }
    if (node.left) {
      return this.min(node.left);
    }
    return node.value;
  }

  dfs(node) {
    const result = [];
    function traverse(currentNode) {
      if (currentNode) {
        result.push(currentNode.value);
        traverse(currentNode.left);
        traverse(currentNode.right);
      }
    }
    traverse(node);
    return result;
  }

  bfs(node) {
    const queue = [node];
    const result = [];
    while (node = queue.shift()) {
      result.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return result;
  }

}

const testBST = () => {
  const theBST = new BinaryTree(5);
  theBST.insert(4);
  theBST.insert(8);
  theBST.insert(20);
  theBST.insert(30);
  theBST.insert(2);

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
    theBST.bfs(theBST)
  ).toEqual([5, 4, 8, 2, 20, 30]);

  expect(
    theBST.dfs(theBST)
  ).toEqual([5, 4, 2, 8, 20, 30]);

  expect(
    theBST.max(theBST)
  ).toEqual(30);

  expect(
    theBST.invert(theBST).left.value
  ).toEqual(8);
};

testBST();
console.log('All tests passed');
