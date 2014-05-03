function pokerHandScorer() {
    var hand = new Array(5);

	this.scoreHand = function(cards) {
		hand = this.createHand(cards);
	
		if (isPair(hand))
			return "One Pair";
		
		return "High Card";
	}
	
	this.createHand = function(rawCards) {
		var cards = rawCards.split(" ");
		var hand = new Array(5);
		
		for(var i = 0; i < cards.length; i++) {
			hand[i] = new card();
			hand[i].rank = cards[i].substring(0, 1);
			hand[i].suit = cards[i].substring(1, 2);
		}
		
		return hand;
	}
	
	function isPair(hand) {
		for(var i = 0; i < hand.length; i++) {
		    if (GetNumberOfMatches(hand[i]) > 0)
		        return true;
		}

		return false;
	}

	function GetNumberOfMatches(card) {
	    var matches = 0;

	    for (var i = 0; i < hand.length; i++) {
	        if (CardsAreNotTheSame(card, hand[i]) && CardsAreTheSameRank(card, hand[i]))
	            matches++;
	    }

	    return matches;
	}

	function CardsAreNotTheSame(card1, card2) {
	    return card1.rank != card2.rank || card1.suit != card2.suit
	}

	function CardsAreTheSameRank(card1, card2) {
	    return card1.rank == card2.rank;
	}
}

function card() {
	this.suit = "";
	this.rank = 0;
}