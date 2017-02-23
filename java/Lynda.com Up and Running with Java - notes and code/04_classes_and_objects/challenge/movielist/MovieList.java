package movielist;
import java.util.Scanner;

public class MovieList {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String title;
    int year, runtime;
    double rating; 

    System.out.println("Enter the title: ");
    title = in.nextLine();

    System.out.println("Enter the year: ");
    year = in.nextInt();
     
    System.out.println("Enter the runtime: ");
    runtime = in.nextInt();

    System.out.println("Enter your rating: ");
    rating = in.nextDouble();

    Movie yourMovie = new Movie(title, rating, year, runtime);
    System.out.println(yourMovie.toString());
  }
}
