// fizzBuzz
// Basic

// print out numbers 1 - 100
// numbers that are multiples of 3 print fizz instead of the number
// numbers that are multiples of 5 print buzz instead of the number
// numbers that are multiples of 3 and 5 print fizzBuzz

for (var i =1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzBuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (1 % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}
