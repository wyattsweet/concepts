public class DataConversion {

  public static void main(String[] args) {

    // implicitly converts result to a double
    System.out.println((3 + 5 + 8) / 3.0);

    //equation that calculates volume of a sphere

    // wrong value is calculated because when you divide two integers
    // you only get an integer when you need a fraction

    double fake_volume = 4/3 * Math.PI * 10*10*10;

    double real_volume = 4/3.0 * Math.PI * 10*10*10; 

    System.out.println("the fake volume is " + fake_volume);
    System.out.println("the real volume is " + real_volume);

    int number;
    value = 3.75;

    // number = value;
    // above line wont compile because you can't put a double value
    // in a int variable, must use explicit conversion
    number = (int)value; // number becomes 3
  }

}
