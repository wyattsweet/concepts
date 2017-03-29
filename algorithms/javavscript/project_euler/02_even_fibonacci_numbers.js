
const evenFibonacci = () => {

  var value = 0;
  var sum = 0;
  var under4Mil = true;
  var prev;
  var holder;

  while(under4Mil) {
    holder = value;

    if (value <= 2) {
      value++;
    } else {
      value = value + prev;
    }

    prev = holder;

    if ((value % 2) === 0) sum = sum + value;
    if (value >= 4000000) under4Mil = false;
  }

  return sum 
}

console.log(evenFibonacci())
