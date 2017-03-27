// Insertion Sort
// Starting with a unsorted list, also create an empty "sorted" list.
// Start at the first number of the unsorted list, it goes into the sorted list straight away because there are no other elements there
// Each element in the unsorted list gets compared to each element in the sorted list from left to right
// If the unsorted element is lower than the sorted element the sorted element moves one place to the right

// Should implement one element at a time in its correct place

var arr = [1000, 4, 2, 13, 3, 2, 1];

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
        break
      }
    }
  }

  return nums
}

console.log(insertionSort(arr))

// O(n²) 
// Better than bubble sort because it doesn't go through the entire array 
// twice the inner loop only goes through part of the array

