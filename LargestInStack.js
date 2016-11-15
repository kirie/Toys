// Create a Stack class and use it to implement another class that finds 
// the largest value in a stack.

// Constraints: Time complexity of O(1)

'use strict';
const expect = require('expect');

const regularStack = function() {
  this.storage = {};
  this.count = 0;

  this.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
  };

  this.pop = () => {
    let popped = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return popped;
  };

  this.size = () => {
    return Object.keys(this.storage).length;
  };

  this.peek = () => {
    if(this.storage[this.count-1]){
      return this.storage[this.count-1];
    }
    else{
      return false;
    }
  };
};

const maxStack = function() {
  
  this.firstStorage = new regularStack();
  this.maxStorage = new regularStack();

  this.push = (val) => {
    this.firstStorage.push(val);
    if(val > this.maxStorage.peek()) {
      this.maxStorage.push(val);
    }
  };

  this.pop = () => {
    let popped = this.firstStorage.pop();
    if(popped === this.maxStorage.peek()){
      this.maxStorage.pop();
    }
    return popped;
  };
  
  this.getMax = () => {
    return this.maxStorage.peek();
  };

};

const testFunction = () => {
  let test1 = new maxStack();
  test1.push(50);
  test1.push(53);
  test1.push(32);
  test1.push(999999);
  test1.pop();
  expect(
    test1.getMax()
  ).toEqual(53);
};

testFunction();
console.log('All tests passed');
