function generateSnake(row, column) {
  //your code here
  let board = [];

  for (let i = 0; i < row; i++) {
    let temp = [];
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) {
        temp.push('~');
      } else if (i === row - 1 && j === column - 1) {
        temp.push('o');
      } else if (i % 2 !== 0 && j === column - 1) {
        temp.push('|');
      } else if (i % 2 === 0 && j === 0 && i !== 0) {
        temp.push('|');
      } else {
        temp.push('_');
      }
    }

    board.push(temp.join(''));
  }

  console.log(board.join('\n'));
}

generateSnake(3, 6);
generateSnake(5, 10);
generateSnake(1, 6)