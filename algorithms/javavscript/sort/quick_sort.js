const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const pivot = nums.pop();
  const left = [];
  const right = [];

  while (nums.length > 0) {
    let current = nums.shift();
    if (current < pivot) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  const finalLeft = quickSort(left);
  const finalRight = quickSort(right);

  // spread syntax
  return [...finalLeft, pivot, ...finalRight];
}

module.exports = quickSort
