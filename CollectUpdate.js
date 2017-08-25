function someCollection() {
  let val;
  let theFunc;
  const result = function (userInput) {
    if (arguments.length > 0) {
      if (typeof theFunc === 'function') {
        theFunc(val, userInput);
      }
      val = userInput;
    }
    return val;
  };
  result.updateFunc = (newFn) => (theFunc = newFn);
  return result;
}

function tester (prevVal, newVal) {
  console.log(prevVal, 'to' ,newVal);
}

const x = someCollection('a');
x();
x('hey');
x('hi');
x();
x.updateFunc(tester);
x('hello');  //hi to hello
