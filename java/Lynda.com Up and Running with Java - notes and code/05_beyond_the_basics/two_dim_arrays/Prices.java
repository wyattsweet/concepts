// This is an example of a 2-D array to represent prices and discounts

import java.util.Scanner;
public class Prices {

  public static void main(String[] args) {
    double[][] prices = new double[5][2];
    Scanner in = new Scanner(System.in);

    for (int i = 0; i<5; i++) {
      System.out.println("Enter the original price: ");
      prices[i][0] = in.nextDouble();

      // add 30% discount to the second column
      prices[i][1] = prices[i][0] * .70;
    }

    for (int i = 0; i<5; i++) {
      System.out.println("original price was " + prices[i][0] + "\tdiscounter price is $" + prices[i][1]);
    } 
  }
}
