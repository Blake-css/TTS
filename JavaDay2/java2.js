// document.getElementByID('myButton').addEventListener('click',myFunction);
// functon myFunction(
// 	console.log("I've been clicked!") :('')
// }

function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    greeting.innerHTML = "Hello " + name + ", it's nice to meet you!";
}

greetOnLoad();

