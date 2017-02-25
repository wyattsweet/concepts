// ArrayList and linear search

// add five grocery items to the list
// Ask user to enter an item name
// Search the ArrayList for a match
// test with one example of a found item and one example of a item not being found
// If it is not found add to the end of the list
// When user is done adding items print out final list of items

package grocerychallenge;

import java.util.Scanner;
import java.util.ArrayList;

public class GroceryList {

  public static void main(String[] args) {
  
    ArrayList<GroceryItem> groceries = new ArrayList<GroceryItem>();
    boolean more = true;
    Scanner in = new Scanner(System.in);

    GroceryItem item = new GroceryItem("apples", 3.23);
    groceries.add(item);

    item = new GroceryItem("bananas", 3.00);
    groceries.add(item);

    item = new GroceryItem("pretzels", 3.45);
    groceries.add(item);

    item = new GroceryItem("kale", .99);
    groceries.add(item);

    item = new GroceryItem("ice cream", 5);
    groceries.add(item);

    while (more) {
      System.out.println("What item are you looking for? ");
      String itemName = in.next();

      for (int i = 0; i < groceries.size(); i++) {
        item = groceries.get(i);
        System.out.println(item.getName());
      }

      more = false;
    }
  }

}
