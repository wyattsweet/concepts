import java.util.Scanner;
import java.util.Scanner;
import java.io.*;

public class CustomerNames {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    File output = new File("customers.txt");
    String name;
    System.out.println("Enter the customers name: ");
    name = in.nextLine();
  
    try
    {
      PrintWriter out = new PrintWriter(output);
      while (name.equalsIgnoreCase("done") == false)
      {
        out.println(name);
        System.out.println("Enter the next name or \"done\" to exit.");
        name = in.nextLine();
      }

      out.close();
    }
    catch(Exception e)
    {
      System.out.println("Error encountered " + e.toString());
    }
  }
}
