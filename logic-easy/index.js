//your code here
function checkCard(num,card){
  for(let i=0; i<card.length; i++){
    if(num == card[i]){
      return true
    }
  }
  return false
}
function dominoCard(card, card2){
  let tempCard=[]
  let check;
  for(let i=0; i<card.length; i++){
    for(let j=0; j< card[0].length; j++){
      check =  checkCard(card[i][j], card2)
      if(check){
        tempCard.push(card[i])
      }
    }
  }
  let total=0;
  let idx=[];
  for(let i=0; i<tempCard.length; i++){
      let sum = tempCard[i][0] + tempCard[i][1]
      if(sum > total){
        total =sum
        idx = tempCard[i]
      }
  }

  if(idx.length !==0){
    console.log(idx);
  }else{
    console.log("tutup 1 kartu");
  }
}
// dominoCard()
dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
