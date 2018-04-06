function dominoCard(hand, deck) {
  var valueA = 0
  var valueB = 0
  var valueC = 0
  var valueD = 0
  var index1 = 0
  var index2 = 0
  var index3 = 0
  var index4 = 0
  var value;
  var result = hand[value];
  var value;
  for (var kiri = 0; kiri < hand.length; kiri++) {
    if (hand[kiri][0] === deck[0]) {
      // console.log('1',hand[kiri]);
      valueA = hand[kiri][0]
      index1 = kiri
      //console.log('-',kiri);
      //console.log('kiri',hand[kiri],deck[0],'k',value);
    } else if (hand[kiri][1] === deck[1]) {
      // console.log('2',hand[kiri]);
      valueB = hand[kiri][1]
      index2 = kiri
    } else if (hand[kiri][1] === deck[0]) {
      // console.log('3',hand[kiri]);
      valueC = hand[kiri][1]
      index3 = kiri
    } else if (hand[kiri][0] === deck[1]) {
      // console.log('4',hand[kiri]);
      valueD = hand[kiri][1]
      index4 = kiri
    }
  }

  // console.log('+',index1,index2,index3,index4);
  // console.log('-',valueA,valueB,valueC,valueD);
  if (index1 == 0 && index2 == 0 && index3 == 0 && index4 == 0) {
    console.log('tutup 1 kartu');
  }
  if (valueD == 4) {
    value = hand[index4]
    console.log(hand[index4]);
  }
  if (valueB == 5) {
    value = hand[index2]
    console.log(hand[index2]);
  }
  return value

}

dominoCard([
  [3, 3],
  [6, 5],
  [3, 4],
  [2, 1]
], [3, 5]) //”keluarkan kartu [6,5]”
dominoCard([
  [3, 3],
  [6, 5],
  [3, 4],
  [2, 1]
], [1, 3]) //"keluarkan kartu [3,4]"
dominoCard([
  [2, 4],
  [6, 6],
  [3, 6]
], [1, 5]) //
