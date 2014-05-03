function pokerHandScorer() {
    var hand = new Array(5);

	this.scoreHand = function(cards) {
		hand = this.createHand(cards);
	
		if (isTwoPair())
		    return "Two Pair";
		if (isPair())
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
	
	function isPair() {
		for(var i = 0; i < hand.length; i++) {
		    if (getNumberOfMatches(hand[i]) == 1)
		        return true;
		}

		return false;
	}

	function isTwoPair() {
	    var numberOfPairs = 0;

	    for (var i = 0; i < hand.length; i++) {
	        if (getNumberOfMatches(hand[i]) == 1)
	            numberOfPairs++;
	    }

	    return numberOfPairs / 2 == 2;
	}

	function getNumberOfMatches(card) {
	    var matches = 0;

	    for (var i = 0; i < hand.length; i++) {
	        if (cardsAreNotTheSame(card, hand[i]) && cardsAreTheSameRank(card, hand[i]))
	            matches++;
	    }

	    return matches;
	}

	function cardsAreNotTheSame(card1, card2) {
	    return card1.rank != card2.rank || card1.suit != card2.suit
	}

	function cardsAreTheSameRank(card1, card2) {
	    return card1.rank == card2.rank;
	}
}

function card() {
	this.suit = "";
	this.rank = 0;
}