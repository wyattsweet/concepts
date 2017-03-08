// write out item from file
// ask user for price
// write out item \t price

import java.util.Scanner;
import java.io.*;

public class FileChallenge {
  public static void main(String[] args) {
    
    File Fileinput = new File("menu.txt");

    try {
      Scanner input = new Scanner(Fileinput);
      while (input.hasNextLine()) {
        System.out.println(input.nextLine());
      }
    } 
    catch (Exception e) {
      System.out.println("Ohh noo");
    }

  }
}
