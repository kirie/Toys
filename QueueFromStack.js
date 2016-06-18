// Create a stack and then create a queue using 2 stacks
// 

const Stack = () => {
  let storage = []
  let count = 0
  this.push = function(val) {
    storage[count] = val
    count++
  }
  this.pop = () => {
    return storage.pop()
    count--
  }
  this.size = () => {
    return storage.length
  }
}

const Queue = () => {
  let inbox = new Stack()
  let outbox = new Stack()
  this.enqueue = function(val){
    inbox.push(val)
  }
  this.dequeue = () => {  
  if(!outbox.size()) {
    while(inbox.size()) {
      outbox.push(inbox.pop())
    }
  }
  return outbox.pop()
  }
  this.dequeue = () => {  
    if(!outbox.size()) {
      while(inbox.size()) {
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  }
