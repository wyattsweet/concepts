// Write a function fib() that takes an integer n and returns the nth fibonacci number
// fibonacci series is 0-indexed and starts with 0

function fib(n) {
  if (n == 0) {
    console.log(0);
  } else if (n == 1) {
    console.log(1);
  } else if(n >= 3) {
    valueOne = 0;
    valueTwo = 1;
    for (var i = 0; i < n - 1; i++) {
      var holder = valueTwo;
      valueTwo = valueOne + valueTwo;
      valueOne = holder;
    }
    console.log(valueTwo);
  }
}

fib(5);
