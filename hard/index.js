function lompatanKuda(input){
  let row = '12345678'
  let column = 'ABCDEFGH'
  let index = ''

  let board = []
  for(let i = row.length - 1; i >= 0; i--){
    let indexColumn = []
    for(let j = 0; j < column.length; j++){
       index = column[j] + row[i]
       indexColumn.push(index)
    }
    board.push(indexColumn)
  }

  let moveCount = 0
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] == input){
        console.log(board[i-1][j+2]);

        if(board[i+2][j+1]){
          moveCount += 1
        }
        if (board[i-2][j+1]){
          moveCount += 1
        }
        if (board[i+2][j-1]){
          moveCount += 1
        }
        if (board[i-2][j-1]){
          moveCount += 1
        }
        if (board[i+1][j+2]){
          moveCount += 1
        }
        if (board[i-1][j-2]){
          moveCount += 1
        }
        if (board[i-1][j+2]){
          moveCount += 1
        }
        if (board[i+1][j-2]){
          moveCount += 1
        }
      }
    }
  }
  return moveCount

}

console.log(lompatanKuda('E4'))
// console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8
