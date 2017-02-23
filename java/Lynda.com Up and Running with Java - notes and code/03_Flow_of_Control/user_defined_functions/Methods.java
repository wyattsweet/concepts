    // a method is a group of statements used to accomplish a 
    // specific task
    //
    // Method definitions have the following parts: 
    //   a method header which includes -
    //      visibility type public, private or protected
    //      a return type
    //      a method name
    //      a list of parameters
    //      and the body of the method enclosed in curly brackets

import java.util.Scanner;
public class Methods {
  public static void main(String[] args) {
    // visibility type is public
    // return type of void
    // method name is mail
    // arguments are in parenthesis - a string array and the variable 'args'
    double x, y, z; 
    double avg;

    Scanner in = new Scanner(System.in);
    System.out.println("Please enter 3 numbers: ");
    x = in.nextDouble();
    y = in.nextDouble();
    z = in.nextDouble();

    avg = average(x, y, z);

    System.out.println("The average is " + avg);

  }

  public static double average(double num1, double num2, double num3) {
    // static means it's in the same file as the main method
    // since this method returns a double must have a return statement

    double avg = (num1 + num2 + num3) / 3;
    return avg;
  }
}
