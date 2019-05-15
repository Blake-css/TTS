/**
 * 
 */
package TurtorialsandExamples;

import java.util.*;

/**
 * @author blake
 *
 */
public class ttsjava { 
	
//	import java.util.*;
//
//	LinkedList<String> animalList = new LinkedList<String>();
//	animalList.add("frog");
//	animalList.add("giraffe");
//	animalList.add("buffalo");
//	animalList.add("mongoose");
//
//	animalList.addFirst("shark"); 
//	]//Puts shark as the first element in the ArrayList
//	animalList.addLast("koala"); 
//	//Puts koala as the last element in the ArrayList
//	    
//	    
//	animalList.add(3, "cuttlefish"); 
//	//This adds the value cuttlefish to the 3rd index of the LinkedList


	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		LinkedList<String> richLess = new LinkedList<String>();
		richLess.add("Dr. Pepper(Pack of 36)");
		richLess.add("Tesla Model S");
		richLess.add("Sony Headphones");
		richLess.add("Japennes Rice");
		
		System.out.println(richLess);

		richLess.addFirst("Mercedez Benz S650");
		
		richLess.addLast("Rivan R1T");
		
		richLess.add(4, "Macbook");
		//This adds the value Macbook to the 4th index of the LinkedList
		
		richLess.get(4);
		// gets whats in the Fourth place
		
		richLess.set(5, "macbook pro");
		// replaces it at the 5th index
		
		richLess.remove(4);
		//Removes the element that is at the 3rd index of the LinkedList
		
		richLess.remove("Macbook");
		//Removes the first instance of "Macbook" in the LinkedList
		
		for(int i = 0; i < richLess.size(); i++) {
			System.out.println(richLess.get(i));
		}
		
//		animalList.addFirst("shark"); 
//		]//Puts shark as the first element in the ArrayList
//		animalList.addLast("koala"); 
//		//Puts koala as the last element in the ArrayList
		
//		animalList.remove(3); 
//		//Removes the element that is at the 3rd index of the LinkedList
//		animalList.remove("piranha"); 
//		//Removes the first instance of "piranha" in the LinkedList
//
//		animalList.removeFirst(); 
//		//Removes the first element of the LinkedList
//		animalList.removeLast(); 
//		//Removes the last elements of the LinkedList
//
//		animalList.contains("giraffe"); 
//		//Returns `true` if "giraffe" is present in the LinkedList
//
//		animalList.size(); 
//		//Returns an integer denoting the size of the LinkedList
//
//		animalList.get(3); 
//		//Returns the value located at the 3rd index of the LinkedList
//		animalList.set(4, "emu");
		//Sets the value at index 4 to "emu"
//		    
//		    
//		animalList.add(3, "cuttlefish"); 
//		//This adds the value cuttlefish to the 3rd index of the LinkedList


	}

}
