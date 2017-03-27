// Bubble Sort

// take this array – [1, 3, 2, 4, 3]
// bubble sort starts by looking at the first two elements in the list, in this case 1 and 3
// If the second element is smaller than the first element the algorithm swaps them, otherwise it
// leaves them and moves on to the next pair in the array, in this case 3 and 2. 
// It does this through the entire array.
//
// Then you need to repeat enough times untill the array is sorted.


function bubble(arr) {
  var swap = false;
  do {
    swap = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        var holder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = holder;
        swap = true;
      } 
    }
  } 
  while(swap);

  console.log(arr);
}

bubble([1, 3, 2, 4, 3]);

// You have to use an outer and inner loop for this so the big O is O(n²)
