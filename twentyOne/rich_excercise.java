package rich_excercise1;

import java.util.*;

public class rich_excercise1 {

	public static ArrayList<Integer> numbers = new ArrayList<Integer>();

	public static void main (String[] args){
		ask();

		//TODO Auto generate method stub
	}

	public static void ask(){

		System.out.println("Give me 5 numbers.... ");
		//create for loop that runs 5 times, asks for input stores in arrayList
		for (int i=0, i < 5; i++) {
			Scanner input = new Scanner(System.in);
			int answer = input.nextInt();
			numbers.add(answer);
			System.out.println("That's " + (i+1))
		}, 

		System.out.println(numbers);
	}

	//sum,product,largest, and smallest in the array
		public static int sum (){

			int sum = 0;
			for ( int = 0, i < number.size(); i++){
				sum +=numbers.get(i);
			}
			return sum;
		}

		public static int product (){

			int sum = 1;
			for ( int = 0, i < number.size(); i++){
				sum *=numbers.get(i);
			}
			return sum;
		}
		public static int max (){

			largest = Collections.max(numbers)
			return largest;
		}
		public static int smallest (){

			smallest = Collections.min(numbers)
			return smallest;
		}
}