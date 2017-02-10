// Insertion Sort
// Starting with a unsorted list, also create an empty "sorted" list.
// Start at the first number of the unsorted list, it goes into the sorted list straight away because there are no other elements there
// Each element in the unsorted list gets compared to each element in the sorted list from left to right
// If the unsorted element is lower than the sorted element the sorted element moves one place to the right

function insert(unsorted_arr) {
  var sorted_arr = [];
  for (var i = 0; i < unsorted_arr.length; i++) {

    if (sorted_arr.length == 0) {
      // 1. check if array is empty, if yes insert value and move on
      //sorted_arr.push(unsorted_arr[i]);

      sorted_arr.push(i);

    } else {
      console.log('b is', b);

      for (var b = sorted_arr.length - 1; b == 0; b--) {
        sorted_arr.push(i);
  
//        current_val = sorted_arr[b];
//        prev_val = sorted_arr[b - 1];
//
//        // if current_val is the first element in the array
//        if (unsorted_arr[i] < current_val && prev_val == undefined) {
//          sorted_arr.unshift(unsorted_arr[i]);
//          break;
//        }
//
//        // if unsorted value is smaller than current_val and greater than prev_val
//        if (unsorted_arr[i] < current_val && unsorted_arr[i] > prev_val) {
//          sorted_arr[b + 1] = sorted_arr[b];
//          sorted_arr[b] = unsorted_arr[i];
//          break;
//        }
//  
//        // If unsorted value is greated than sorted value
//        if (unsorted_arr[i] > current_val ) {
//          //  a. if so push to end of array
//          sorted_arr.push(unsorted_arr[i]);
//          break;
//        }
      }
    }
  }

  console.log(sorted_arr);
}

insert([9, 7, 3, 2, 3, 23, 4]);
