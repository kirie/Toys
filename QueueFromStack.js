// Create a stack and then create a queue using 2 stacks

const Stack = () => {
  let storage = []
  let count = 0
  this.push = function(val) {
    storage[count] = val;
    count++;
  };
  this.pop = () => {
    return storage.pop();
    count--;
  };
  this.size = () => {
    return storage.length;
  };
};

const Queue = () => {
  // create two Stacks
  let inbox = new Stack()
  let outbox = new Stack()
  
  // push new elements to the inbox
  this.enqueue = (val) => {
    inbox.push(val)
  };
  // dequeue will check the outbox. IF it's empty then we push all our inbox items into the outbox
  // and pop off the outbox. We then return this popped off item.
  this.dequeue = () => {  
    if(!outbox.size()) {
      while(inbox.size()) {
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  }
}
