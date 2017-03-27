// Write a function fib() that takes an integer n and returns the nth fibonacci number
// fibonacci series is 0-indexed and starts with 0

function fib(n) {
  if (n <= 2) {
    return 1;
  }

  valueOne = 0;
  valueTwo = 1;
  for (var i = 0; i < n - 1; i++) {
    var holder = valueTwo;
    valueTwo = valueOne + valueTwo;
    valueOne = holder;
  }

  return valueTwo;
}

console.log(fib(10));

// Better recursive solution would be

function fibRecursive(n) {
  if (n <= 2) {
    return 1;
  }

  return fibRecursive(n -1) + fibRecursive(n -2);
}

console.log(fibRecursive(10));
