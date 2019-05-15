package black_jack;
import java.util.Random;

public class black_jack {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        int compHand = computerHand();
        int playerHand = playerHand();
        whoWon(playerHand, compHand);
    }
    
    public static int computerHand() {
        // Generate two random numbers and compare the two to see if they equal 21
        // or if they go over 21.
        
        Random rand = new Random();
        int card1 = rand.nextInt(11);
        int card2 = rand.nextInt(11);
        
        // Get total of two cards
        int total = card1 + card2;
        
        // Check to see if card1 plus card2 is over 21
        if (total > 21) {
            System.out.println("Computer loses. Bust!");
            return total;
        }  else if (total == 21) {
            System.out.println("Computer Wins!");
            return total;
        } else {
            // Return the computers value
            System.out.println("Lets play");
            return total;
        }
        
    }
    
    public static int playerHand() {
        
        // Randomly generate two cards for the player
        Random rand = new Random();
        int card1 = rand.nextInt(11);
        int card2 = rand.nextInt(11);
        
        int total = card1 + card2;
        System.out.println(total);
         if (total < 21){
            Scanner input = new Scanner(System.in);
            System.out.println(" Do you want to hit or stand");
            String answer = input.nextLine();
            if ( answer.equalsIgnoreCase("hit")){
                Random rand1 = new Random();
                int humanCard = rand1.nextInt(9) + 2;
                int newTotal = humanCard+=total;
                System.out.println(newTotal);
            }

         }
        
        // Ask user if they would like to take a hit or not
        // if (total > 21) {
        //     System.out.println("You lose. You busted!");
        //     return total;
        // } else if (total == 21) {
        //     System.out.println("You hit 21! You win!");
        //     return total;
        // } else {
        //     return total;
        }
        
        
    }
    
    public static void whoWon(int playerHand, int compHand) {
        // Compare players hand to the users hand to determine who won
        if (playerHand == compHand) {
            System.out.println("You didnt win, but you didnt lose");
        } else if (playerHand == 21) {
            System.out.println("21! You win!");
        } else if (playerHand < compHand) {
            System.out.println("You lose");
        } else if (playerHand > 21) {
            System.out.println("You busted");
        } else if (playerHand > compHand) {
            System.out.println("You win!");
        } else if (compHand > 21) {
            System.out.println("Computer busted! You win!");
        }
    }

}