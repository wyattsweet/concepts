package movielist;

public class Movie {
  private String title;
  private double rating;
  private int year;
  private int runtime;

  public Movie (String title, double rating, int year, int runtime)
  {
    this.title = title;
    this.rating = rating;
    this.year = year;
    this.runtime = runtime;
  }

  public String toString()
  {
    return "Title: " + title +
     "\nRating: " + rating +
     "\nyear: " + year +
     "\nruntime: " + runtime; 
  }
}
