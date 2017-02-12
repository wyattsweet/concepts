// Find the sum of numbers in an array
// Ex. If you have arr = [1, 2, 3, 4, 5]
// It would return 15
//

var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum);
