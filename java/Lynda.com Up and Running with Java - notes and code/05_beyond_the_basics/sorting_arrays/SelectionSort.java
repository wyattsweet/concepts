// Selection Sort
// Starts with first value in array and compares it to the remaining items
// searching for the smallest if we're trying to sort in ascending order
// Once located it swaps the two values

public class SelectionSort {
  
  public static void main(String[] args) {
    
    int[] nums = {54, 86, 2, 12, 34, 65, 75, 6, 44};

    selectionSort(nums);

    for (int i = 0; i < nums.length; i++) {
      System.out.print(nums[i]+"\t");
    } 
  }

  public static void selectionSort(int[] arr) {
    int current, lowest, index = -1;

    for (int i = 0; i < arr.length; i++) {
      current = arr[i];
      lowest = arr[i];
      for (int x = i + 1; x < arr.length; x++) {
        if (arr[x] < lowest) {
          lowest = arr[x];
          index = x;
        }
      }

      if (index >= 0) {
        arr[i] = arr[index];
        arr[index] = current;
      }
    }
  }
}
