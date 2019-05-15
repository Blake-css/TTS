import java.util.*

public class twentyOne {

while (true) {
            int compHand = compHand();
            int playerHand = playerHand();
            compare(compHand, playerHand);
            
            Scanner input = new Scanner(System.in);
            System.out.println(" Do you want to play again? say yes or no ");
            String answer = input.nextLine();
            if (answer.equals("no")) {
                break;
            }
        }

    }

    public static int compHand() {
        Random rand = new Random();
        int card1 = rand.nextInt(9) + 2;
        int card2 = rand.nextInt(9) + 2;
        int comptotal = card1 + card2;
        System.out.println("Computer cards were " + card1 + " and " + card2 + " and score is " + comptotal);
        return comptotal;
    }

    public static int playerHand() {
        Random rand1 = new Random();
        int card3 = rand1.nextInt(9) + 2;
        int card4 = rand1.nextInt(9) + 2;
        int playertotal = card3 + card4;
        System.out.println("Your cards were " + card3 + " and " + card4 + " and score is " + playertotal);
        return playertotal;
    }

    public static void compare(int comptotal, int playertotal) {
        if (comptotal > 21) {
            System.out.println("You Win!");
        } else {
            if (comptotal < 21 && comptotal < playertotal) {
                System.out.println("You Win!");
            } else {
                if (playertotal < 21 && playertotal < comptotal) {
                    System.out.println("Computer Wins!");
                } else {
                    if (playertotal > 21) {
                        System.out.println("You lose");
                    } else {
                        if (comptotal == playertotal) {
                            System.out.println("Neither Wins");
                        }
                    }

                }
            }
        }

    }

}