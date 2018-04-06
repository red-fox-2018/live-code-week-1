function dominoCard(card, deck) {
  var count = []
  for (var i = 0; i < card.length; i++) {
    for (var j = 0; j <= card[i].length; j++) {
      // console.log(card[i][j]);
      var hasil = card[i][j]
      // console.log(hasil);
      if (hasil === deck[1] || hasil === deck[0]) {
        count.push(card[i])
      }
    }
  }
  var penjumlahan = []
  for (var k = 0; k < count.length; k++) {
    for (var l = 0; l < count[k].length; l++) {
      var pasangan = count[k][l] + count[k][l + 1]
      // console.log(pasangan);
      penjumlahan.push(pasangan)
    }
    var max = penjumlahan[0]
    for (var m = 0; m <= penjumlahan.length; m++) {
      if (max < penjumlahan[m]) {
        max=count[k]
          console.log(max);
      }
    }
  }
  return max
}
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])); // [6,5]
// console.log(dominoCard([[3, 3],[6, 5],[3, 4],[2, 1]], [1, 3])); // [3,4]
// console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5]));// Tutup 1 kartu
