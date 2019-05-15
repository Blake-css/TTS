var billAmount = 117;

function gratutity(){
	return billAmount*.20;
	//console.log(whatsMyGrat);
}

function totalWithGrat(amount){
	return = gratutity() + amount;
	
}

 
console.log('Your total including gratuity is:' + totalWithGrat(billAmount).toFixed('2'));
