// A basic Java program for calculating travel costs

// tells the program which package it belongs to
//
// same name as the class but all lower case (not needed for CLI)
//package travelcosts;
// import used to include libraries created by others
import java.util.Scanner;

/**
 * @author Wyatt
 */

// every Java program starts with a class name
public class TravelCosts {

  // Every Java program must have one and only one main method
  public static void main(String[] args) {
    double distance, mpg, pricePerGallon, totalCost;
    Scanner in = new Scanner(System.in);
    System.out.println("Enter the total distance in miles: ");
    distance = in.nextDouble();
  
    System.out.println("Enter the MPG for the vehicle: ");
    mpg = in.nextDouble();
  
    System.out.println("Enter the price of one gallon of gas: ");
    pricePerGallon = in.nextDouble();
  
    totalCost = (distance/mpg)*pricePerGallon;
    System.out.printf("The trip is going to cOST $%5.2f",totalCost);
    System.out.println();
  }

}
