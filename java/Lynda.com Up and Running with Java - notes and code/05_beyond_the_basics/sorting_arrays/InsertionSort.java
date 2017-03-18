// Sorts in descending order
public class InsertionSort {
  
  public static void main(String[] args) {
    
    int[] nums = {54, 86, 2, 12, 34, 65, 75, 6, 44};

    insertionSort(nums);

    for (int i = 0; i < nums.length; i++) {
      System.out.print(nums[i]+"\t");
    } 
  }

  public static void insertionSort(int[] arr) {
    int j, key, i;
    for (j = 1; j < arr.length; j++) {
      key = arr[j];
      for (i = j - 1; (i >= 0) && (arr[i] < key); i--) {
        arr[i + 1] = arr[i];    
      }

      arr[i + 1] = key;
    }

  }

}
