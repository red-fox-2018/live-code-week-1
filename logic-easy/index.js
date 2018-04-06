//your code here

function dominoCard(onHand, onDeck) {
  let objOnHand = [];
  for (var i = 0; i < onHand.length; i++) {
    objOnHand[i] = {};
    objOnHand[i].card = onHand[i];
    objOnHand[i].total = onHand[i][0] + onHand[i][1];
    objOnHand[i].index = i;
  }

  objOnHand.sort(function (a, b) {
    return b.total - a.total;
  })
  // let sameNumber = [];
  for (var i = 0; i < objOnHand.length; i++) {
    for (var j = 0; j < objOnHand[i].card.length; j++) {
      for (var k = 0; k < onDeck.length; k++) {
        if (objOnHand[i].card[j] === onDeck[k]) {
          return console.log('keluar kartu', objOnHand[i].card);;
        }
      }
    }
  }
  console.log('tutup 1 kartu');
}







dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
