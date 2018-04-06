function generateSnake(row, column) {
  //your code here
  var board = []
  for(var i = 0; i < row; i++) {
    var arrRow = []
    for(var j = 0; j < column; j++) {

      if(i === 0 && j === 0) {
        arrRow.push('~')
      } else if(i === row -1 && j == column - 1) {
        arrRow.push('o')
      } else if(i > 0 && i % 2 !== 0 && j == column - 1) {
        arrRow.push('|')
      } else if(i > 0 && i % 2 === 0 && j == 0) {
        arrRow.push('|')
      }
      else {
        arrRow.push('_')
      }
    }
    board.push(arrRow.join(' '))
  }
  console.log(board.join('\n'))
}

generateSnake(6, 10);
