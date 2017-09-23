const expect = require('expect');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  display() {
    return this.root;
  }

  contains(root, val) {
    if (val === root.value) {
      return true;
    }
    else if (root.value < val) {
      if (root.right) {
        return this.contains(root.right, val);
      }
      return false;
    }
    else if (root.value > val) {
      if (root.left) {
        return this.contains(root.left, val);
      }
      return false;
    }
  }

  insert(val) {
    const node = {
      value: val,
      left: null,
      right: null
    };

    let currentNode;
    if (!this.root) {
      this.root = node;
    }
    else {
      currentNode = this.root;
      while (currentNode) {
        if (currentNode.value > val) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          }
          else {
            currentNode = currentNode.left;
          }
        }
        else if (currentNode.value < val) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          }
          else {
            currentNode = currentNode.right;
          }
        }
        else {
          console.log('This value could not be inserted! :(');
        }
      }
    }
  }

  min(root) {
    if (!root) {
      return null;
    }
    if (root.left) {
      return this.min(root.left);
    }
    return root.value;
  }

  max(root) {
    if (!root) {
      return null;
    }
    if (root.right) {
      return this.max(root.right);
    }
    return root.value;
  }

  // Traversals
  preorderT(root, cb) {
    cb(root.value);
    if (root.left) {
      this.preorderT(root.left, cb);
    }
    if (root.right) {
      this.preorderT(root.right, cb);
    }
  }

  inorderT(root, cb) {
    if (root.left) {
      this.inorderT(root.left, cb);
    }
    cb(root.value);
    if (root.right) {
      this.inorderT(root.right, cb);
    }
  }

  postorderT(root, cb) {
    if (root.left) {
      this.postorderT(root.left, cb);
    }
    if (root.right) {
      this.postorderT(root.right, cb);
    }
    cb(root.value);
  }

  breadthT(root, cb) {
    const queue = [];
    let temp;
    queue.push(root);
    while (queue.length) {
      temp = queue.shift();
      cb(temp.value);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }

  invert(root){
    if (root) {
      const left = root.left ? root.left : null;
      const right = root.right ? root.right : null;
      root.left = this.invert(right);
      root.right = this.invert(left);
    }
    return root;
  }
}

const testBST = () => {
  const theBST = new BinaryTree();
  theBST.insert(4);
  theBST.insert(8);
  theBST.insert(20);
  theBST.insert(30);
  theBST.insert(2);

  expect(
    theBST.display().value
  ).toEqual(4);

  expect(
    theBST.contains(theBST.root, 20)
  ).toEqual(true);

  expect(
    theBST.display().left.value
  ).toEqual(2);

  expect(
    theBST.max(theBST.root)
  ).toEqual(30);

  expect(
    theBST.invert(theBST.root).left.value
  ).toEqual(8);

  theBST.preorderT(theBST.root, z => console.log(z));
  theBST.inorderT(theBST.root, z => console.log(z));
  theBST.postorderT(theBST.root, z => console.log(z));
  theBST.breadthT(theBST.root, z => console.log(z));
};

testBST()
console.log('All tests passed')