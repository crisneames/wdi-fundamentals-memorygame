

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You've found a match!")
	}
		else {
			alert("Sorry, try again.")
		}
}
checkForMatch();
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
flipCard();
flipCard(0);
flipCard(2);

}


