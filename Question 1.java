package TurtorialsandExamples;

public class myArray {
	
	
	
	
		 public static void main(String args[]) {
			 
		 int[] a = new int[5];
		 a[0]=10; //initialization
		 a[1]=20;
		 a[2]=70;
		 a[3]=40;
		 a[4]=50;

		 // write code to print out each value in the array.
		 
		 for (int element: a) {
	            System.out.println(element);
			}

		 }
}

		


Number 2

package TurtorialsandExamples;

public class myArray {
	
	
	
	
			 
			 public static void main(String[] args) {
				 
				 
			        int[] array = {10, 20, 30, 40, 50};

			        for (int element: array) {
			            System.out.println(element);
			        }
			}

}

Number 3

package TurtorialsandExamples;
import java.util.Scanner;

public class myArray {
	
	
	public static void main(String[] args) {
		
	 Scanner in = new Scanner(System.in);
	 System.out.print("Input first number: ");
	 int num1 = in.nextInt();
	 System.out.print("Input second number: ");
	 int num2 = in.nextInt();
	 System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
	 }

	}

		
Number 4

package TurtorialsandExamples;
import java.util.Scanner;

public class myArray {
	
	public static void add() {
		
		 Scanner in = new Scanner(System.in);
		 System.out.print("Input first number: ");
		 int num1 = in.nextInt();
		 System.out.print("Input second number: ");
		 int num2 = in.nextInt();
		 int sum = num1 + num2;
		 System.out.println(num1 + " + " + num2 + " = " +sum);
		
	}
	
	public static void main(String[] args) {
		add();
	
	 }

	}

Number 5

package TurtorialsandExamples;
import java.util.Scanner;

public class myArray {
	
	public static void subtract() {
		
		 Scanner in = new Scanner(System.in);
		 System.out.print("Input first number: ");
		 int num1 = in.nextInt();
		 System.out.print("Input second number: ");
		 int num2 = in.nextInt();
		 int sum = num1 - num2;
		 System.out.println(num1 + " - " + num2 + " = " +sum);
		
	}
	
	public static void main(String[] args) {
		subtract();
	
	 }

	}

Number 6

package ExceptionHandling;
import java.util.Scanner;

class MyArray {
	
	 public static void main(String args[]) {
 
				try
				{
					// declare and initialize here.
					int a,b,c;
					Scanner KB=new Scanner(System.in);
					
					// input numbers here.
					System.out.print("Enter first number : ");
					a=KB.nextInt();
		       
					System.out.print("Enter second number : ");
					b=KB.nextInt();
		       
					//throw to catch
					c=a/b;
					System.out.println("Result:"+c);
				}
				catch(ArithmeticException e)
				{
					System.out.println("Error:"+e.getMessage());
					System.out.println("Error:"+e);
				}
				// here program ends.
				System.out.println("End of Program...");
			}
	}
	
number 7

20

number 8

public class DogTest {
 public static void main(String[] args) {

Yorshire dog1 = new Yorkshire( "Billy" );
		
		System.out.println(dog1);
		dog1.speak();
		
		
Labrador dog2 = new Labrador( "Marley" , "black");
		
		System.out.println(dog2);
		dog2.speak();
		dog2.avgBreedWeight();
		

}}

part 2

bascially no call to the function average breed weight to the Yorshire


part 3

Adding this method gives the dog class the ability to get and or set all three
attributes at once with a fuction call to the other classes to give the values.