function pokerHandScorer() {
    var hand = new Array(5);
    var cardRankings = {};

    this.scoreHand = function (cards) {
        setUpCardRankings();
	    hand = createHand(cards);
	
		if (isStraightFlush())
		    return "Straight Flush";
		if (isFourOfAKind())
		    return "Four of a Kind";
		if (isFullHouse())
		    return "Full House";
		if (isFlush())
		    return "Flush";
		if (isStraight())
		    return "Straight";
		if (isThreeOfAKind())
		    return "Three of a Kind";
		if (isTwoPair())
		    return "Two Pair";
		if (isPair())
			return "One Pair";
		
		return "High Card";
	}
	
    function createHand(rawCards) {
	    var cards = rawCards.split(" ");
	    var hand = new Array(5);

	    for (var i = 0; i < cards.length; i++) {
	        hand[i] = new card();

	        if (cards[i].length == 3) {
	            hand[i].rank = cards[i].substring(0, 2);
	            hand[i].suit = cards[i].substring(2, 3);
	        }
	        else {
	            hand[i].rank = cardRankings[cards[i].substring(0, 1)];
	            hand[i].suit = cards[i].substring(1, 2);
	        }
		}
		
		return hand;
	}
	
	function isPair() {
		for(var i = 0; i < hand.length; i++) {
		    if (getTotalNumberOfMatches(hand[i]) == 1)
		        return true;
		}

		return false;
	}

	function isTwoPair() {
	    var numberOfPairs = 0;

	    for (var i = 0; i < hand.length; i++)
	        if (getNumberOfMatches(hand[i], i) == 1)
	            numberOfPairs++;

	    return numberOfPairs == 2;
	}

	function isThreeOfAKind() {
	    for (var i = 0; i < hand.length; i++)
	        if (getNumberOfMatches(hand[i], i) == 2)
	            return true;

	    return false;
	}

	function isFourOfAKind() {
	    for (var i = 0; i < hand.length; i++)
	        if (getNumberOfMatches(hand[i], i) == 3)
	            return true;

	    return false;
	}

	function isStraight() {
	    hand.sort(function (a, b) { return parseFloat(a.rank) - parseFloat(b.rank) });

	    for (var i = 0; i < hand.length - 1; i++) {
	        if (hand[i].rank != (hand[i + 1].rank - 1))
	            return false;
	    }

	    return true;
	}

	function isFlush() {
	    for (var i = 0; i < hand.length - 1; i++)
	        if (hand[i].suit != hand[i + 1].suit)
	            return false;

	    return true;
	}

	function isFullHouse() {
	    return isThreeOfAKind() && isPair();
	}

	function isStraightFlush() {
	    return isStraight() && isFlush();
	}

	function getNumberOfMatches(card, startIndex) {
	    var matches = 0;

	    for (var i = startIndex; i < hand.length; i++)
	        if (cardsAreNotTheSame(card, hand[i]) && cardsAreTheSameRank(card, hand[i]))
	            matches++;

	    return matches;
	}

	function getTotalNumberOfMatches(card) {
	    var matches = 0;

	    for (var i = 0; i < hand.length; i++)
	        if (cardsAreNotTheSame(card, hand[i]) && cardsAreTheSameRank(card, hand[i]))
	            matches++;

	    return matches;
	}

	function cardsAreNotTheSame(card1, card2) {
	    return card1.rank != card2.rank || card1.suit != card2.suit
	}

	function cardsAreTheSameRank(card1, card2) {
	    return card1.rank == card2.rank;
	}

	function setUpCardRankings() {
	    cardRankings["2"] = 2;
	    cardRankings["3"] = 3;
	    cardRankings["4"] = 4;
	    cardRankings["5"] = 5;
	    cardRankings["6"] = 6;
	    cardRankings["7"] = 7;
	    cardRankings["8"] = 8;
	    cardRankings["9"] = 9;
	    cardRankings["10"] = 10;
	    cardRankings["J"] = 11;
	    cardRankings["Q"] = 12;
	    cardRankings["K"] = 13;
	    cardRankings["A"] = 14;
	}
}

function card() {
	this.suit = "";
	this.rank = 0;
}