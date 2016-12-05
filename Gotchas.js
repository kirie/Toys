// JS Gotchas collection
// Answers at the bottom:

// 1  What is the output of line 9
(function() {
   var a = b = 5;
})();

console.log(b);


// 2  What is the output of line 23
function test() {
  console.log(a);
  console.log(foo());
   
  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// 3  What is the output of line 38 and 40

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());

// 4 Fix #3 so that line 40 prints Auelio De Rosa

// 5 What is returned from line 60 and 61

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log(foo1());
console.log(foo2());


// 6  What will be the output?
for (var i = 0; i < 5; i++) {
  setTimeout(() => {console.log(i)}, i * 1000 );
}


// 7 What is the output of line 77?
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);


// 8

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

// 9 

console.log(typeof null);


/**

ANSWERS

1.) 5
  Only a is defined as a local variable.  b becomes a global variable.
2.) undefined and 2
  a is hoisted, but is not assigned so it is undefined.  foo is also hoisted
3.) Aurelio De Rosa and undefined
  the this context of test is global
4.) console.log(test.call(obj.prop))
5.) {bar: 'hello'} and undefined
  A semicolon is automatically inserted on the return of line 55.
6.) 5, 5, 5, 5, 5
  Closure.  the function console.log(i) will retain access to i, which will end at 5.
7.) 456
  Javascript will stringify the object to a key value of [object Object].
8.) 122, 32, 02, 112, NaN2, NaN
9.) Object
**/

// Sources:
// https://www.sitepoint.com/5-typical-javascript-interview-exercises/
// https://www.toptal.com/javascript/interview-questions