test( "1C 3H 5D 6S 8H just returns High Card", function() {
  var scorer = new pokerHandScorer();
  equal( scorer.scoreHand("1C 3H 5D 6S 8H"), "High Card");
});

test( "8C 3H 5D 6S 8H just has a first element with rank 8", function() {
  var scorer = new pokerHandScorer();
  var hand = scorer.createHand("8C 3H 5D 6S 8H");
  equal( hand[0].rank, 8);
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

test("3C 2H 1D 4H 5D just returns straight", function () {
    var scorer = new pokerHandScorer();
    equal(scorer.scoreHand("3C 2H 1D 4H 5D"), "Straight");
});