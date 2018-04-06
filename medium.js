// berikut adalah hasil: generateSnake(1,30)
// ~____________________________o

function generateSnake(row, column) {
  // if (row === 1 && column === 1) {
  //   console.log('o');
  // } else if (row === 0 && column === 0) {
  //   console.log('row atau column minimal harus 1');
  // }
  var board = []
  for (let i = 0; i < row; i++) {
    var hasil = []
    for (let j = 0; j < column; j++) {
      hasil.push('-')
    }
    if (row === row) {
      hasil.push('o')
    }
    else if (row === column -1) {
      hasil.push('~')
    }
    board.push(hasil)
  }
  console.log(hasil.join(''));
}

generateSnake(3, 6);
// generateSnake(1, 30)
// generateSnake(1, 1);// o
// generateSnake(0, 0);// row atau column minimal harus 1
