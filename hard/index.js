
function papanCatur(){
  let mainBoard =[]
  for(let i=0; i<8; i++){
    let row=[]
    for(let j=0; j<8; j++){
      row.push(" ")
    }
    mainBoard.push(row)
  }
  return mainBoard
}

function checkAtas(board, idxCol, idxRow){
  for(let i=0; i<3; i++){
    if(board[idxRow-i][idxCol] !== ' ' || board[idxRow-i][idxCol] === undefined){
      return false
    }
  }
  return true
}

function checkBawah(board, idxCol, idxRow){
  for(let i=0; i<3; i++){
    if(board[idxRow+i][idxCol] !== ' ' || board[idxRow+i][idxCol] === undefined){
      return false
    }
  }
  return true
}

function checkKanan(board, idxCol, idxRow){
  for(let i=0; i<3; i++){
    if(board[idxRow][idxCol+i] !== ' ' || board[idxRow][idxCol+i] === undefined){
      return false
    }
  }
  return true
}

function checkKiri(board, idxCol, idxRow){
  for(let i=0; i<3; i++){
    if(board[idxRow][idxCol-i] !== ' ' || board[idxRow][idxCol-i] === undefined){
      return false
    }
  }
  return true
}

function lompatanKuda(posisi){
  let board = papanCatur()
  let huruf ="ABCDEFGH"
  let idxCol = huruf.indexOf(posisi.charAt(0))
  let idxRow = 8-Number(posisi.charAt(1))
  let idxKuda = []
  idxKuda.push(idxRow, idxCol)

  let count = 0
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board.length; j++){
      if(i == idxKuda[0] && j ==  idxKuda[1]){
        let cekAtas = checkAtas(board, idxCol, idxRow)
        if(cekAtas){
          //kanan
          if(board[i - 2][j+1] === ' '){
            count++
          }
          if(board[i - 2][j-1] === ' '){
            count++
          }
        }
        //======
        let cekBawah = checkBawah(board, idxCol, idxRow)
        if(cekBawah){
          //kanan
          if(board[i + 2][j+1] === ' '){
            count++
          }
          if(board[i + 2][j-1] === ' '){
            count++
          }
        }
        //==
        let cekKanan = checkKanan(board, idxCol, idxRow)
        if(cekKanan){
          //kanan
          if(board[i-1][j+2] === ' '){
            count++
          }
          if(board[i+1][j+2] === ' '){
            count++
          }
        }
        //======
        let cekKiri = checkKiri(board, idxCol, idxRow)
        if(cekKiri){
          //kanan
          if(board[i-1][j-2] === ' '){
            count++
          }
          if(board[i+1][j-2] === ' '){
            count++
          }
        }
      }
    }
  }

  return count
}

// console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8
