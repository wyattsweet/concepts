package grocerychallenge;

public class GroceryItem {

  private String name;
  private double cost;  

  public GroceryItem (String name, double cost) {
    this.name = name;
    this.cost = cost;
  }

  public String getName() {
    return name;
  }
}
