import java.util.Scanner;

public class CalculateShipping {

  public static void main(String[] args) {
  
    double totalSale = 0;

    Scanner in = new Scanner(System.in);

    System.out.println("Enter total amount for the sale: ");
    totalSale = in.nextDouble();

    // add appropriate shipping fee based on totalSale amount
    if (totalSale < 25) {
      totalSale = totalSale + 15;
    } else if (totalSale < 50) {
      totalSale = totalSale + 10;
    } else if (totalSale <= 75) {
      totalSale = totalSale + 5;
    }

    System.out.println("Total cost for the sale is " + totalSale);
  }

}
