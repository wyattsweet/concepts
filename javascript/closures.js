// What are Closures in JavaScript?

// Closures are when a function is able to remember and access its lexical scope, even when that function
// is executing outside its lexical scope.

// a really good example of closures in action

function foo() {

  var a = 2;

  function bar() {
    console.log(a)
  }

  return bar;

}

var baz = foo();

baz(); // 2

// bar is executed on line 21, but it is executed outside of its
// declared lexical scope

// The function bar has lexical scope access to foo
// After we execute foo we assign the remaining value to baz

// Usually after we execute bar, we would expect that the entire inner scope of foo would go away
// because the JS runtime engine employs garbage collection to free up memory once it's no longer in use
// but closures doesn't let that happen because bar is still in use. Bar has a lexical scope closure
// over foo(), which keeps the scope alive for bar() to reference at a later time. 

// bar still has a reference to that scope, and that reference is called closure!
