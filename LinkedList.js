'use strict';

let LinkedList = function () {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (val) {
    let newNode = Node(val);
    if (!list.head) {
      list.head = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  // single LL
  list.removeTail = function () {
    if(!list.tail){
      return 'No Tail';
    }
    let node = list.head;
    while (node && node.next) {
      if(node.next.next === null) {
        let temp = node.next;
        node.next = null;
        return temp;
      }
      node = node.next;
    }
  };
  list.removeHead = function () {
    if (!list.head) {
      return null;
    }
    let temp = list.head;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function (val) {
    let node = list.head;
    while (node) {
      if (node.value === val) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  list.reverse = function () {
    let node = list.head;
    let prev = null;
    while (node) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
    return prev;
  };

  list.traverse = function (cb) {
    let node = list.head;
    while(node) {
      cb(node);
      node = node.next;
    }
  };
  return list;
};

let Node = function (val) {
  let node = {};
  node.value = val;
  node.next = null;
  return node;
};

let x = new LinkedList();
x.addToTail(5);
x.addToTail(4);
x.traverse((y) => console.log(y.value));
let z = x.removeTail();
console.log(z);