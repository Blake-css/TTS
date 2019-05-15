// Rock Paper scissors

document.getElementById('rock').addEventListener('click',function(){var user_choice = 'rock'});

document.getElementById('paper').addEventListener('click',function(){var user_choice = 'paper'});

document.getElementById('scissors').addEventListener('click',function(){var user_choice = 'scissors'});

//Rock paper scissors
	
var hands = ['rock', 'paper', 'scissors'];
var NumHands =[0,1,2];

document.getElementById('rock').addEventListener('click',function(){var user_choice = 'rock'});

document.getElementById('paper').addEventListener('click',function(){var user_choice = 'paper'});

document.getElementById('scissors').addEventListener('click',function(){var user_choice = 'scissors'});


function getHand()
	{
		var getBet = hands[comp-1];
	}

//var user = prompt("What would you like to pick rock paper of scissors?");


var comp = Math.floor(Math.random()*3+1);
//var comAnswer = hands[comp-1];

 //console.log( user, hands);

switch (getHand()){

	case 1:                             
		if ( user  === 'paper' ){
			console.log("You win");
		}
		else if  (user === 'scissors'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	

	//This sees that case 2 is set by paper
	case 2:
	                             
		if ( user === 'scissors' ){
			console.log("You win");
		}
		else if  (user === 'rock'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	
	
	//This sees that case 3 is set by scissors
	case 3:                             
	
		if ( user === 'rock' ){
			console.log("You win");
		}
		else if  (user === 'paper'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	}