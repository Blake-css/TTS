// an array to hold my shopping list

var shopping = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
console.log(shopping)

// add Fruit Loops to the list

shopping.push('Fruit loops')
console.log(shopping)

// update coffee to fair trade coffee

shopping.splice(4, 1, 'Fair Trade Coffee')
console.log(shopping)

// replce chips and salsa with rice and beans

shopping.splice(2, 1, 'rice')
shopping.splice(3, 1, 'beans')
console.log(shopping)

// create an empty array to represent your shopping cart
	
var shopping_cart = []

// remove last from list and add to shopping cart

// var shopping_cart = [shopping.pop()];
shopping_cart.push(shopping.pop())
console.log(shopping_cart)

shopping_cart.shift


	//console.log(shopping)