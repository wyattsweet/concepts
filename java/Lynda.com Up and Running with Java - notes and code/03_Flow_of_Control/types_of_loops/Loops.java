public class Loops {
  public static void main(String[] args) {
    // 3 types of loops in Java
    //
    // do while loop - post test loop
    System.out.println("Results of do/while loop: ");
    int count = 0;
    do {
      System.out.println(count);
      count++;
    } while (count < 3);

    // while loop - pre test loop
    count = 0;
    while(count < 3) {
      System.out.println(count);
      count++;
    }

    // for loop - pre test loop
    count = 0;
    for(int i = 0; i < 3; i++) {
      System.out.println(count);
      count++;
    }
  }
}
