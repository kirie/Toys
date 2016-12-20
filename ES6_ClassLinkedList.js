const expect = require('expect');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  display() {
    return this;
  }

  addToTail(val) {
    const newNode = this.node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else if (this.tail) {
      this.tail.next = newNode;
    }
    else {
      this.tail = newNode;
    }
  }

  addToHead(val) {
    const newNode = this.node(val);
    const temp = this.head;
    this.head = newNode;
    this.head.next = temp;
  }

  removeHead() {
    if(!this.head) {
      return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }

  contains(target) {
    let node = this.head;
    while (node) {
      if (this.head.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    while (node) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
    return prev;
  }

  traverse(cb) {
    let node = this.head;
    while (node) {
      cb(node.value);
      node = node.next;
    }
  }

  node(val) {
    return {
      value: val,
      next: null
    };
  }
}

const testFunction = () => {
  const x = new LinkedList();
  x.addToHead(4);
  x.addToHead(6);

  expect(
    x.contains(6)
  ).toEqual(true);
};

testFunction();
console.log('All tests passed');
