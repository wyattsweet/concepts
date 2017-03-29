// Find the largest prime factorial of a number

const num = 600851475143;

const primeFactor = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      var div = num / i;
      var prime = isPrime(div);
      if (prime) {
        return [i, div, isPrime(div)]
      } else {
        primeFactor(div);
      }
    }
  }
}

const isPrime = (num) => {
  for(var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeFactor(num));
