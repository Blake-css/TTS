var hands = ['rock', 'paper', 'scissors'];
function getHand() {
		var myhand = hands[parsInt((Math.random(hands)*3)]
	}

var player1[	
var = player1 {
		name: "Chris";
		getHand (); 
	}	

	

function playRound('player1','player2')
{
	var a = p.getHand();
	var b = player2.getHand();

	switch (comp){

	//This sees that case 1 is set by rock
	case 1:                             
		if ( a === 'scissors' ){
			console.log("You win");
		}
		else if  (a === 'paper'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	}

	//This sees that case 1 is set by paper
	case 2:
	                             
		if ( b === 'scissors' ){
			console.log("You win");
		}
		else if  ( b === 'rock'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	
	
}
	


// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     if(choice1==="rock"){
//         if(choice2==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(choice1==="paper"){
//         if(choice2==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(choice1==="scissors"){
//         if(choice2==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
// compare(userChoice,computerChoice);