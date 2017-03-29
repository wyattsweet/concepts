

function countPrime() {
  var count = 0;
  var number;
  for (var i = 1; count <= 10001; i++) {
    if (i <= 2) {
      count++;
    } else if (i%2 != 0) {
      var div = false;
      for (var x = i - 1; x > 2; x--) {
        if (i%x == 0) {
          div = true;
        }
      }

      if (!div) {
        count++;
        number = i;
      }
    }
  }

  return number;
}

const result = countPrime();
console.log(result);
