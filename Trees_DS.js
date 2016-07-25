'use strict';

function Node (data) {
  this.val = data;
  this.parent = null;
  this.children = [];
}

function Tree (data) {
  let node = new Node(data);
  this._root = node;
}

Tree.prototype.DFtraverse = function (callback){
  function recurse(currentNode) {
    for(let i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
  }
  recurse(this._root);
};

Tree.prototype.BFtraverse = function (callback) {
  let myQueue = new Queue();
  myQueue.enqueue(this._root);
  let currentTree = myQueue.dequeue();
  while(currentTree) {
    for(let i = 0 ; i < currentTree.children.length; i++) {
      myQueue.enqueue(currentTree.children[i]);
    }
    callback(currentTree);
    currentTree = myQueue.dequeue();
  }
};

let Queue = function () {
  let storage = [];
  this.enqueue = function (dat) {
    storage.push(dat);
  };
  this.dequeue = function () {
    return storage.shift();
  };
};

let myTree = new Tree('A');