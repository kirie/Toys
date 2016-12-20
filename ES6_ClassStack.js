const expect = require('expect');

class Stack {
  constructor() {
    this.stackObj = {};
    this.counter = 0;
  }

  push(val) {
    this.stackObj[this.counter] = val;
    this.counter++;
  }

  pop() {
    --this.counter;
    const temp = this.stackObj[this.counter];
    delete this.stackObj[this.counter];
    return temp;
  }

  size() {
    return this.counter;
  }

  display() {
    return this;
  }
}

const testFunc = () => {
  const stackTest = new Stack();
  stackTest.push(4);
  stackTest.push(5);

  expect(
    stackTest.pop()
  ).toEqual(5);
  expect(
    stackTest.size()
  ).toEqual(1);
};

testFunc();
console.log('All tests passed')