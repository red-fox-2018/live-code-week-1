/*jshint esversion:6*/
/*
buat board catur

 */
function board(num) {
  let board = [];
  let alphabetBoard = ' abcdefgh';
  for (let i = num; i >= 0; i--) {
    let row = [];
    for (let j = 0; j <= num; j++) {
      if (j === 0 && i > 0) {
        row.push(i + '');
      } else if (i === 0) {
        row.push(alphabetBoard[j]);
      } else {
        row.push(' ');
      }
    }
    board.push(row);
  }
  return board;
}

console.log(board(8));
