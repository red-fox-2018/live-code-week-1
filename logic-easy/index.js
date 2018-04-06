//your code here
function dominoCard (handCard,deckCard){
  // console.log('deckCard --->', deckCard)
  let max = 0
  let cardMax = []
  let sumCard = 0
  for(let i =0; i < handCard.length; i++){
        if(handCard[i][0] === deckCard[0] || handCard[i][1] === deckCard[0] || handCard[i][0] === deckCard[1] || handCard[i][1] === deckCard[1]){
              sumCard = handCard[i][0]+handCard[i][1]

        }
        if(max<sumCard){
              max = sumCard
              cardMax.push(handCard[i])
        }
  }
  if(cardMax.length>0){
    return cardMax[cardMax.length-1]
  }else{
    return 'tutup 1 kartu'
  }

}
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])); //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])); //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5]));//”tutup 1 kartu”
