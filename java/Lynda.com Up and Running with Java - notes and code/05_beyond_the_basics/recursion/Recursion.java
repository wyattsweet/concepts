// simple countdown using recursion

public class Recursion {

  public static void main(String[] args) {
    countdown(10);
  }

  public static void countdown(int num) {
    if (num < 1) {
      System.out.println("Blast off");
    } else {
      System.out.println(num);
      countdown(num - 1);
    }
  }

}
