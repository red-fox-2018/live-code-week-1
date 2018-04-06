//your code here
function checkCard(card, boardCard) {
  for (let i in boardCard) {
    // console.log(boardCard[i], card)
    if(card == boardCard[i] || card == boardCard[i]) {
      return true
    }
  }
}
function dominoCard(playerCard, boardCard) {
  let output = [];
  for (let i in playerCard) {
    let isDuplicate = false;
    if (checkCard(playerCard[i][0], boardCard) === true || checkCard(playerCard[i][1], boardCard) === true) {
      // console.log('==>',playerCard[i])
      output.push(playerCard[i])
    }
  }
  // console.log(output)
  let max = 0;
  let index = 0
  for (let i in output) {
    let sum = output[i][0]+output[i][1]
    if (sum > max) {
      max = sum;
      index = i
    }
  }
  let front = "Keluarkan ";
  let mid = "kartu ";
  let kartu = [output[index]];
  // console.log(max, index)
  if (output.length === 0) {
    front = 'tutup 1 ';
    console.log(front + mid)
  }else {
    console.log(front + mid + '[' + kartu + ']')
  }
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”