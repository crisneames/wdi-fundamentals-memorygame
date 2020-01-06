//console.log("Up and running!");


//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//represents 1st card user flips
var cardOne = cards[0];

cardsInPlay.push('cardOne');

console.log("User flipped queen");
//represents 2nd card user flips
var cardTwo = cards[2];
//add cardTwo to player hand
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You've found a match!")
	}
		else {
			alert("Sorry, try again.")
		}
}


