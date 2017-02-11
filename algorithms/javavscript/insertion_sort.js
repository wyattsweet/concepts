// Insertion Sort
// Starting with a unsorted list, also create an empty "sorted" list.
// Start at the first number of the unsorted list, it goes into the sorted list straight away because there are no other elements there
// Each element in the unsorted list gets compared to each element in the sorted list from left to right
// If the unsorted element is lower than the sorted element the sorted element moves one place to the right

var arr = [1000, 4, 2, 13, 3, 2, 1];

for (var i = 1; i < arr.length; i++) { // 3 
  var current = arr[i];

  for (var n = 1; n < arr.length; n++) {
       prev = arr[i - n];

    if (prev > current) {
      arr[i - n] = arr[(i - n) + 1];
      arr[(i - n) + 1] = prev;
    }

    if (prev < current) {
      break;
    }
  }

}

console.log(arr);
