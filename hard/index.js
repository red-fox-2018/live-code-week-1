function generateBoard(row, col) {
  let board = [];
  let col_start = row
  let letter = 'a'.charCodeAt();
  for (var i = 0; i < row + 1; i++) {
    board[i] = [];
    for (var j = 0; j < col + 1; j++) {
      if (i === row) {
        if (j === 0) {
          board[i].push('@');
        } else {
          board[i].push(String.fromCharCode(letter))
          letter = letter + 1;
        }
      } else if (j === 0) {
        board[i].push(col_start);
        col_start--
      } else {
        board[i].push(' ')
      }

    }
  }
  return board;
}

function generateIndex (posisi) {
  posisi = posisi.toLowerCase();
  let objIndex = {};
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] == posisi.charAt(0)) {
        objIndex.index_j = j;
      } else if (board[i][j] == posisi.charAt(1)) {
        objIndex.index_i = i;
      }
    }
  }
  return objIndex;
}

function lompatanKuda(posisi) {
  //kuda ==> #
  let counter = 0;
  let objOfIndex = generateIndex(posisi)
  let idx_i = objOfIndex.index_i;
  let idx_j = objOfIndex.index_j;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (i == idx_i && j == idx_j) {
        board[i][j] = '#';
        if (board[idx_i + 1][idx_j +2] === ' ') {
          counter++;
        } else if (board[idx_i + 1][idx_j - 2] === ' ') {
          counter++;
        } else if (board[idx_i - 1][idx_j - 2] === ' ') {
          counter++;
        } else if (board[idx_i - 1][idx_j + 2] === ' ') {
          counter++;
        } else if (board[idx_i + 2][idx_j - 1] === ' ') {
          counter++;
        } else if (board[idx_i + 2][idx_j + 1] === ' ') {
          counter++;
        } else if (board[idx_i - 2][idx_j + 1] === ' ') {
          counter++;
        } else if (board[idx_i - 2][idx_j - 1] === ' ') {
          counter++;
        }
      }
    }
  }
  console.log(board);
  // for (var i = 0; i < board.length; i++) {
  //   for (var j = 0; j < board[i].length; j++) {
  //     if (board[idx_i + 1][idx_j +2] === ' ') {
  //       counter++;
  //     } else if (board[idx_i + 1][idx_j - 2]) {
  //       counter++;
  //     } else if (board[idx_i - 1][idx_j - 2]) {
  //       counter++;
  //     } else if (board[idx_i - 1][idx_j + 2]) {
  //       counter++;
  //     } else if (board[idx_i + 2][idx_j - 1]) {
  //       counter++
  //     }
  //   }
  // }
  return counter;
}


var board = generateBoard(8, 8);
// generateIndex('A1')


console.log(lompatanKuda('A1')) // 2
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8
