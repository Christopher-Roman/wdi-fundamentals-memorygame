console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
  }
 }
}

var flipCard = function(cardID) {
  console.log("User flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);
  checkForMatch();	
}

flipCard(0);
flipCard(2);


//var cardOne = cards[0];

//var cardTwo = cards[1];

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

//if (cardsInPlay.length === 2) {
//	if (cardsInPlay[0] === cardsInPlay[1]) {
//		alert("You found a match!");
//	} else {
//		alert("Sorry, try again.")
//	}
//}