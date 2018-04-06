function dominoCard(cardInDesk,cardinHand){
  var max = 0
  var highIndex = 0
  var highCard = []
  var sameCard = []
  for(let i=0;i<cardInDesk.length;i++){
    if (cardinHand[0] == cardInDesk[i][0] || cardinHand[0] == cardInDesk[i][1]){
      sameCard.push([cardInDesk[i][0],cardInDesk[i][1]])
    }
    else if (cardinHand[1] == cardInDesk[i][0] || cardinHand[1] == cardInDesk[i][1]){
      sameCard.push([cardInDesk[i][0],cardInDesk[i][1]])
    }
  }
  for(let i=0;i<sameCard.length;i++){
    highCard.push(sameCard[i][0]+sameCard[i][1])
  }
  for(let i=0;i<highCard.length;i++){
    if(highCard[i]>max){
      max=highCard[i]
      highIndex = i
    }
  }
  if(sameCard.length==0){
    return 'tutup 1 kartu'
  }
  else{
    return `keluarkan kartu [${sameCard[highIndex]}] `
  }
}
console.log(dominoCard([[3, 3], [6, 5], [3, 4], [2, 1]], [3, 5])) //”keluarkan kartu [6,5]” 
console.log(dominoCard([[3, 3], [6, 5], [3, 4], [2, 1]], [1, 3])) //"keluarkan kartu [3,4]" 
console.log(dominoCard([[2, 4], [6, 6], [3, 6]], [1, 5])) //”tutup 1 kartu”