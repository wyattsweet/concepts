import java.util.Scanner;

public class TravelCosts {
  
  public static void main(String[] args) {
    double distance, mpg, pricePerGallon, totalCost;

    // declare string variable
    String vehicle;
    
    Scanner in = new Scanner(System.in);
    System.out.println("Enter the total distance in miles: ");
    distance = in.nextDouble();

    System.out.println("Enter the mpg for the vehicle: ");
    mpg = in.nextDouble();

    System.out.println("Enter the price per gallon: ");
    pricePerGallon = in.nextDouble();

    System.out.println("Enter the vehicle type: ");
    vehicle = in.next();

    totalCost = (distance/mpg) * pricePerGallon;

    // string concatnate the vehicle
    System.out.printf("The trip will cost $%5.2f since you are driving a " + vehicle,totalCost);
    System.out.println();
  }

}
