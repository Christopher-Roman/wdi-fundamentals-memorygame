//List of available objects to match
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//Empty Array to collect chosen cards
var cardsInPlay = [];

//Function to check for matches based on the cards that are flipped.
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
  }
 }

//Function to flip cards, push cards to the empty array, and log object information to the console
var flipCard = function() {
	var cardId = this.getAttribute('data-id')
 	cardsInPlay.push(cards[cardId].rank);
 	console.log(cards[cardId].suit); 
 	console.log(cards[cardId].cardImage);
 	this.setAttribute('src', cards[cardId].cardImage)
//Call for the card check function if two cards are in play
if (cardsInPlay.length === 2){
  checkForMatch();
 }
};

//Function to create the board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};
createBoard();