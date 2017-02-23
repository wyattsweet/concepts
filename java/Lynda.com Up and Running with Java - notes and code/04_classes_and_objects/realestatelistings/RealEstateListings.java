package realestatelistings;

public class RealEstateListings {

  public static void main(String[] args) {
    Property land = new Property(10000, "Land", 2.1);
    Property estate = new Property(900000, "House", 1.4, 3, 2);

    System.out.println(land.toString());
    System.out.println(estate.toString());

    estate.setAskingPrice(850000);

    System.out.println(estate.toString());
  }

}
