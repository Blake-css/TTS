package twentyONE;

import java.util.Scanner; 
import java.util.Random; 
import java.util.*;
import java.io.Console; 

public class twenty1 {



	

	public static int getNumber(){
		Random rand1 = new Random();
		int humanNumber1 = rand1.nextInt(9) + 2;
		return humanNumber1;
	}

	public static int  addNum(int x, int y){

		int result = x + y;
		return = result;
	}


	public static  int SubNum(int x, int y){

		int result = x-y;
		return result;
	}

	public static String fun(int x, int y){
		String winner;
		if (x >  y){
			winner = "Congrats human! You win";
			return winner;
		}else{
			winner = "Sorry Human";
			return winner;
		}
	}

	public static void main(String[] args){
		int humanCard1 = getNumber();
		int humanCard2 = getNumber();
		int humantotal = humanCard1 + humanCard2;
		int humantotal1 = addNum(humanCard1,humanCard2);

		int computerCard1 = getNumber();
		int computerCard2 = getNumber();
		int computertotal = computerCard1 + computerCard2;
		int computertotal1 = addNum(computerCard1,computerCard2);

		String overALLChamp = fun(humantotal1, computertotal1);
		System.out.println(overALLChamp);
	}
	}
}
