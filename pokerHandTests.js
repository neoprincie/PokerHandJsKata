test( "An uninteresting hand just returns High Card", function() {
  var scorer = new pokerHandScorer();
  equal( scorer.scoreHand("1C 3H 5D 6S 8H"), "High Card");
});