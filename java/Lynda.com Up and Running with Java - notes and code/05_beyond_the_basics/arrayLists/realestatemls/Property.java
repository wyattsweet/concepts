package realestatemls;

// property class
public class Property {
  private double askingPrice;
  private String propertyType;
  private double lotSize;
  private int numBath;
  private int numBeds;

  // 2 constructors, one for a property with a structure and one for just a lot
  public Property (double askingPrice, String propertyType, double lotSize) 
  {
    this.askingPrice = askingPrice;
    this.propertyType = propertyType;
    this.lotSize = lotSize;
    numBeds = 0;
    numBath = 0;
  }

  public Property (double askingPrice, String propertyType, double lotSize, int numBeds, int numBath) 
  {
    this.askingPrice = askingPrice;
    this.propertyType = propertyType;
    this.lotSize = lotSize;
    this.numBeds = numBeds;
    this.numBath = numBath;
  }

  // method that returns data
  public String toString() 
  {
    return "Asking price is " + askingPrice +
           ". Property type is " + propertyType + 
           ". Lot size is " + lotSize + ". " +
           numBeds + " bedrooms and " + numBath + " bathrooms.";
  }

  // mutator method to change asking price
  public void setAskingPrice(double newValue)
  {
    askingPrice = newValue;
  }
}
