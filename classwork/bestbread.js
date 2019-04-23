// //Blake's Best Beard

// var best= "Freshly Baked";
// var worst= "Sara lee";
// var forget_it= "Kroger";
// var blake_best= worst;	

// // now the If else

// if (blake_best===best)
// 	{
// 		console.log("Man you like fresh bread")
// 	}
// 	else if (blake_best===worst)
// 	{
// 		console.log("You and Shahz should be best friend")	
// 	}
// 	else {
// 		console.log("Forget it just kill yourself")
// 	}


// var cup= 4;

// if (cup != 3)
// 	{
// 		console.log("Yes I'll take another cup of coffee");
// 	}
// 	else 
// 	{
// 		console.log("I think I'm okay for now");
//	}


// var temp= prompt("What the temp?");
// var prec= false;
// var indoor= true;

// 	console.log("The Tempertaure is " + temp + " degrees");

// if (temp > 80 && prec===false)
// {
// 	console.log("Time to swim")
// }
// else if (indoor) 
// {
// 	console.log("time to swim")
//}

var user = prompt("What would you like to pick rock paper of scissors?");

var comp = Math.floor(Math.random()*3+1);

switch (comp){

	//This sees that case 1 is set by rock
	case 1:                             
		if ( user === 'scissors' ){
			console.log("You win");
		}
		else if  (user === 'paper'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	}

	//This sees that case 1 is set by paper
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
	
	
	//This sees that case 1 is set by scissors
	case 3:                             
	
		if ( user === 'paper' ){
			console.log("You win");
		}
		else if  (user === 'papper'){
			console.log("You lose");
		}
		else {
			console.log("Its a tie");
		}
	