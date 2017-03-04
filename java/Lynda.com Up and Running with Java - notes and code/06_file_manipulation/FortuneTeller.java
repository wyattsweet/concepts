import java.util.Scanner;
import java.util.ArrayList;
import java.io.*;
import java.util.Random;

public class FortuneTeller {
  public static void main(String[] args) {

    File inputFile = new File("answers.txt");
    ArrayList<String> answers = new ArrayList<String>();
    String answer, response = "y";
    Random rand = new Random();
    try 
    {
      Scanner input = new Scanner(inputFile);
      while(input.hasNextLine()) 
      {
        answer = input.nextLine();
        answers.add(answer);
      }
    }
    catch (Exception e) 
    {
      System.out.println("The input file \"answers.txt\" was not found.");
      System.out.println(e.toString());
    }
    Scanner in = new Scanner(System.in);
    while(response.equalsIgnoreCase("y"))
    {
      System.out.println("Think about your question and hit enter");
      in.nextLine();
      System.out.println(answers.get(rand.nextInt(answers.size())));
      System.out.println("Do you have another question? (y/n)");
      response = in.nextLine();
    }
  }
}
