
const isPalindrome = (num) => {
  var numArr = String(num).split('');

  if (numArr.length % 2 != 0) {
    return false;
  }

  var middle = numArr.length/2;

  for (var i = 0; i < middle; i++) { 
    var tail = numArr[(numArr.length - 1) - i];
    if (numArr[i] != tail) {
      return false;
    }
  }
  return true;
}

const threeDigit = () => {
  var arr = [];
  for (var i = 999; i > 100; i--) {
    for (var l = 999; l > 100; l--) {
      var mul = i * l;
      if(isPalindrome(mul)) {
        arr.push(mul);
      }
    }
  }

  return Math.max.apply(Math, arr);
}

console.log(threeDigit(999, 999));
