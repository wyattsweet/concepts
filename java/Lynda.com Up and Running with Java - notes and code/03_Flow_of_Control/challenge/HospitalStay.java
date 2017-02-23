
import java.util.Scanner;

public class HospitalStay {

  public static void main(String[] args) {
    boolean morePatients = true;
    Scanner in = new Scanner(System.in);

    do {
      calculateCost();
      System.out.println("Are there more patients? true or false: ");
      morePatients = in.nextBoolean(); 
    } while (morePatients);
  }

  public static void calculateCost() {
    double med_fee, lab_fee, overnight_cost = 0, totalCost;
    boolean overnight;

    Scanner in = new Scanner(System.in);

    System.out.println("What were the total medication fees?");
    med_fee = in.nextDouble();

    System.out.println("What were the total lab fees?");
    lab_fee = in.nextDouble();

    System.out.println("Overnight visit? true or false: ");
    overnight = in.nextBoolean();

    if (overnight) {
      System.out.println("ohh snap, how much did that cost??");
      overnight_cost = in.nextDouble(); 
    }

    totalCost = med_fee + lab_fee + overnight_cost;
    System.out.println("Total damage was " + totalCost);
  }
}
