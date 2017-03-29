
// type = squares || nums
function sum(num) {
  if (num === 0) return num;
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum = sum + (i * i);
  }

  return sum;
}

function nums(num) {
  if (num === 0) return num;
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum * sum;
}

var num = 100;
var sumsSquared = sum(num);
var numsSumsSquared = nums(num);

console.log( numsSumsSquared - sumsSquared );
