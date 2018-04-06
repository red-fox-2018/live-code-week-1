//your code here

function dominoCard(cardAtHand, cardAtDeck){
  let arrTmp = []

  for(let i = 0; i < cardAtHand.length; i++){
    let card = cardAtHand[i]
     if(card[0] == cardAtDeck[0] || card[1] == cardAtDeck[1]){
       arrTmp.push(card)
     } else if(card[0] == cardAtDeck[1] || card[1] == cardAtDeck[0]){
       arrTmp.push(card)
     }
  }

  if(arrTmp.length <= 0){
      return console.log('tutup 1 kartu');
  }

  let result = []
  for(let j = 0; j < arrTmp.length-1; j++){
    let tmp = arrTmp[j]

    let pembanding = arrTmp[j+1]

    if(tmp[0] > pembanding[0] || tmp[1] > pembanding[1]){
      result.push(tmp)
    }
  }
  return console.log(`keluarkan kartu [${result}]`);
}


dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])
//”keluarkan kartu [6,5]”

dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])
//"keluarkan kartu [3,4]"

dominoCard([[2,4],[6,6],[3,6]], [1,5])
// //”tutup 1 kartu”
