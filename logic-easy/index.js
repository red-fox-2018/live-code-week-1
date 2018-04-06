//your code here
function dominoCard(cards, cardsOnDeck) {
  var add = []
  for(var i = 0; i < cards.length; i++) {
    // console.log(cards[i][0], cards[i][1]);
    for(var j = 0; j < cards[i].length; j++) {
      if(cardsOnDeck[0] === cards[i][j] || cardsOnDeck[1] === cards[i][j]) {
        // console.log(cards[i]);
        add.push(cards[i][0] + cards[i][1])
      }
    }
  }
  console.log(add);
  var index = 0
  for(var k = 0; k < add.length; k++) {
    if(Math.max(...add) == add[k]) {
      index = k
      return 'keluarkan kartu ' + cards[index]
    }
  }
  return 'tutup'
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”
