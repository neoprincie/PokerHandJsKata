function pokerHandScorer() {
	this.scoreHand = function(cards) {
		var hand = this.createHand(cards);
	
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
			var card = hand[i];
			
			for(var j = 0; j < hand.length; j++) {
				if (i != j)
					if (card.rank == hand[j].rank)
						return true;
			}
		}
	}
}

function card() {
	this.suit = "";
	this.rank = 0;
}