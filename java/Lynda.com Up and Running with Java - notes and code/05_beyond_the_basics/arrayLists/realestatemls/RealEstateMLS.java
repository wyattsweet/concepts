// ArrayLists
// arrays only store primitive data types. Array lists will hold other data types such as objects
// another advantage is they are not a fixed size but the disadvantage is they take up more overhead
//
// Keep track of many properties without having to keep track of the array type
package realestatemls;

import java.util.Scanner;
import java.util.ArrayList;

public class RealEstateMLS {

  public static void main(String[] args) {
    
    ArrayList<Property> mls = new ArrayList<Property>();
    Property p1 = new Property(10000, "Land", 3.5);
    mls.add(p1);
    p1 = new Property(23000, "Estate", 2.0, 3, 4);
    mls.add(p1);

    // removes the element at index 1
    // mls.remove(1);

    for (int i = 0; i < mls.size(); i++) {
      System.out.println(mls.get(i).toString());
    }
  }

}
