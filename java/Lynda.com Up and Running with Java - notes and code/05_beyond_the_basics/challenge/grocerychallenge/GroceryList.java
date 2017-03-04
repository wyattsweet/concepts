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
    boolean exists = false;
    boolean add;

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
      exists = false;
      System.out.println("What item are you looking for? ");
      String itemName = in.next();

      for (int i = 0; i < groceries.size(); i++) {
        item = groceries.get(i);
        if (item.getName().equalsIgnoreCase(itemName)) {
          exists = true;
        }
      }

      if (exists) {
        more = addMore();
      } else {
        System.out.println("Would you like to add the item? true or false");
        add = in.nextBoolean();
        if (add) {
          item = new GroceryItem(itemName, 5);
          groceries.add(item);
          more = addMore();
        }
      }
    }

    for(int i = 0; i < groceries.size(); i++) {
      System.out.println(groceries.get(i).getName());
    }
  }

  public static boolean addMore () {
    boolean more = false;
    Scanner in = new Scanner(System.in);

    System.out.println("We got it! Would you Like to add more items? true or false");
    more = in.nextBoolean();
    return more;
  }
}
