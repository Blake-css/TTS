/**
 * 
 */
package Car_dealer;

/**
 * @author Blake
 *
 */
import java.util.*;

	public class car_dealer {

	public static HashMap<String, String> car_dealer = new HashMap<>();
	       
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

			//.put adds items to the hash map
			
			car_dealer.put("E55-AMG","MERCEDES-BENZ");
			car_dealer.put("GTO","PONTIAC");
			car_dealer.put("XJR","JAGUAR");
			car_dealer.put("S65-AMG","MERCEDES-BENZ");
			car_dealer.put("S600","MERCEDES-BENZ");


			Scanner input = new Scanner(System.in);
			System.out.println( "How are you, what car model are you look for?");
			String answer = input.nextLine();
			String message = checkForModel	



	}
	
	public static string checkForModel (String carModel) {
		String message="";
		
		
	}

	//loop through the hash map and return each key/value pair
	for (Map.Entry<String, String> entry : car_dealer.entrySet()){
		String model = car.getKey();
		}
}
