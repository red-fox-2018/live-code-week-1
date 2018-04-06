function generateBoard(num) {
  var mainBoard = []
  for(var i = num - 1; i >= 0; i--) {
    var row = []
    row.push(`${i}`)
    for(var j = 0; j < num; j++) {
      if(i === 4 && j === 4) {
        row.push('H')
      } else if(i === 0) {
        row.push(String.fromCharCode(65+j))
      }
        else {
        row.push('_')
      }
    }
    mainBoard.push(row)
  }
  return mainBoard
}

function checkStep() {
  var board = generateBoard(9)
  var step = 0
  // var rowPoint;
  // var colPoint;

  for(var i = 0; i < board.length-1; i++) {
    for(var j = 1; j < board[i].length; j++) {
      if(board[i][j] === 'H') {
        if(board[i+2][j+1] === '_') {
          step++
        }
        if(board[i+2][j-1] === '_') {
          step++
        }
        if(board[i+1][j+2] === '_') {
          step++
        }
        if(board[i+1][j-2] === '_') {
          step++
        }
        if(board[i-1][j-2] === '_') {
          step++
        }
        if(board[i-1][j+2] === '_') {
          step++
        }
        if(board[i-2][j-1] === '_') {
          step++
        }
        if(board[i-2][j+1] === '_') {
          step++
        }
        return step
      }
    }
  }
}

console.log(generateBoard(9));
console.log(checkStep());
