// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

const asyncMap = (tasks, callback) => {
  const result = [];
  let counter = 0;
  tasks.forEach((v, i) => {
    v((value) => {
      result[i] = value;
      counter++;
      if (counter === tasks.length) {
        callback(result);
      }
    });
  });
};

const asyncMap2 = (tasks, callback) => {
  const results = [];
  tasks.forEach((v) => results.push(new Promise(v)));
  Promise.all(results)
    .then(value => callback(value));
};


function test1(cb) {
  cb('hello');
}

function test2(cb) {
  cb('world');
}

asyncMap([test1, test2], (val) => console.log(val)); // logs: ['hello', 'world']
