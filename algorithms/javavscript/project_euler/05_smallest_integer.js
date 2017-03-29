//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestInteger = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var unmatch = true;
  var number;

  for (var i = 20; unmatch; i++) {
    var count = 0;
    for (var k = 0; k < digits.length; k++) {
      if (i % digits[k] === 0) count += 1;
    }

    if (count === digits.length) {
      unmatch = false;
      return i;
    }
  }
}

console.log(smallestInteger());
