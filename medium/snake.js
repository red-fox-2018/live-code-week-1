function generateSnake(row, column) {
  let newArr = [];
  let input = 1;
  for (var i = row - 1; i >= 0; i--) {
    newArr[i] = [];
    if ((row - i) % 2 === 1) {
      for (let j = 0; j < column; j++) {
        if (input === 1) {
          newArr[i][j] = 'o';
        } else if (input === (row * column)) {
          newArr[i][j] = '~';
        } else if (input % column === 0) {
          newArr[i][j] = '|';
        } else {
          newArr[i][j] = '_';
        }
        input++
      }
    } else {
      for (let j = column - 1; j >= 0; j--) {
        if (input === 1) {
          newArr[i][j] = 'o';
        } else if (input === (row * column)) {
          newArr[i][j] = '~';
        } else if (input % column === 0) {
          newArr[i][j] = '|';
        } else {
          newArr[i][j] = '_';
        }
        input++
      }
    }
    newArr[i] = newArr[i].join('');
  }
  return showSnake(newArr);
}

function showSnake(snake) {
  for (var i = 0; i < snake.length; i++) {
    console.log(snake[i]);
  }
}

generateSnake(3, 6);
