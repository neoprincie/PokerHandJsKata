test( "1C 3H 5D 6S 8H just returns High Card", function() {
  var scorer = new pokerHandScorer();
  equal( scorer.scoreHand("1C 3H 5D 6S 8H"), "High Card");
});

test( "8C 3H 5D 6S 8H just returns One pair", function() {
  var scorer = new pokerHandScorer();
  equal( scorer.scoreHand("8C 3H 5D 6S 8H"), "One Pair");
});

test( "8C 3H 3D 6S 8H just returns two pair", function() {
  var scorer = new pokerHandScorer();
  equal( scorer.scoreHand("8C 3H 3D 6S 8H"), "Two Pair");
});

test("8C 3H 8D 6S 8H just returns three of a kind", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("8C 3H 8D 6S 8H"), "Three of a Kind");
});

test("3C 2H 6D 4H 5D just returns straight", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3C 7H 6D 4H 5D"), "Straight");
});

test("3H 2H 1H 4H 5H just returns flush", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3H 9H 1H 4H 5H"), "Flush");
});

test("3H 3S 3C 2H 2S just returns full house", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3H 3S 3C 2H 2S"), "Full House");
});

test("8C 3H 8D 8S 8H just returns four of a kind", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("8C 3H 8D 8S 8H"), "Four of a Kind");
});

test("3H 2H 6H 4H 5H just returns straight flush", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3H 2H 6H 4H 5H"), "Straight Flush");
});

test("10C 3H 5D 6S 10H just returns One pair", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("10C 3H 5D 6S 10H"), "One Pair");
});

test("3H 2H 10H 4H 5H just returns flush", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3H 2H 10H 4H 5H"), "Flush");
});

test("10C JH QD KH AD just returns straight", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("10C JH QD KH AD"), "Straight");
});

test("2C 3H 4D 5H AD just returns straight", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("2C 3H 4D 5H AD"), "Straight");
});