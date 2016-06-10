// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

var asyncMap = function (tasks, callback) {
  //  create a result variable to pass into the callback last
  var result = []
  // count each task
  var counter = 0

  //  loop through the tasks array
  for (var i = 0; i < tasks.length; i++) {
    //  Wrap as IIFE for each iteration to keep i
    (function (i) {
      // for each task add the value to the results array
      tasks[i](function (value) {
        result[i] = value
        counter++
        // when the counter is equal to the number of tasks, then run the callback
        if (counter === tasks.length) {
          callback(result)
        }
      })
    })(i)
  }
}
