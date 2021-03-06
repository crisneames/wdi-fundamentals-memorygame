

var cards = [
{rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},
{rank: "queen",
 suit: "diamonds",
 cardImage: "images/queen-of-diamonds.png"
},
{rank: "king",
 suit: "hearts",
 cardImage: "images/king-of-hearts.png"
},
{rank: "king",
 suit: "diamonds",
 cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];



function checkForMatch() {

this.setAttribute('src', cards[cardId].cardImage);
	

	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(){
cardId = this.getAttribute('data-id');

checkForMatch();
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards.cardImage);
console.log(cards.suit);
}

function createBoard(){
for (let i = 0; i < cards.length; i++) {
   let cardElement = document.createElement('img');
   cardElement.setAttribute('src', 'images/back.png');
   cardElement.setAttribute('data-id', i);
   cardElement.addEventListener('click', flipCard);
   document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();



