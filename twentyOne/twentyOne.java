import java.util.Scanner; 
import java.util.Random; 
import java.util.*;
import java.io.Console; 

package twentyOne

public class twentyOne {

public static int getNumber(){
	Random rand1 = new Random();
	int humanNumber1 = rand1.nextInt(9) + 2;
	return humanNumber1;
}

public static int  addNum(int x, int y){

	int result = x + y;
	return = result
}


public static  int SubNum(int x, int y){

	int result = x-y;
	return result;
}

publis static String fun(int x, int y){
	String winner;
	if (x >  y){
		winner = "Congrats human! You win"
		return winner;
	}else{
		winner "Sorry Human";
		return winner;
	}
}

public static void main(String[] args){
	int hamanCard1 = getNumber();
	int hamanCard2 = getNumber();
	int humantotal = humanCard1 + humanCard2;
	int humantotal = addNum(humanCard1,humanCard2);

	int computerCard1 = getNumber();
	int computerCard2 = getNumber();
	int computertotal = computerCard1 + computerCard2;
	int computertotal = addNum(computerCard1,computerCard2);

	String overALLChamp = fun(humantotal, computertotal)
	System.out.println(overALLChamp);
}
}