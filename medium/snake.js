function generateSnake(row, column) {
  if (row == 1 && column == 1) {
    console.log('o');
  }else if (row == 0 && column == 0) {
    console.log('row atau column minimal harus 1');
  } else if (row == 1) {
    var arrHasil = [];
    for (var i = 0; i < row; i++) {
      var arr = [];
      for (var j = 0; j < column; j++) {
        if (j == 0) {
          arr.push('~')
        } else if (j == column - 1) {
          arr.push('o');
        } else {
          arr.push('_')
        }
      }
      arrHasil.push(arr.join(''))
    }
    console.log(arrHasil.join('\n'));
  } else {
    var arrHasil = [];
    for (var i = 0; i < row; i++) {
      var arr = [];
      for (var j = 0; j < column; j++) {
        if (i == 0 && j == 0) {
          arr.push('~')
        } else if (i == 0 && j > 0) {
          arr.push('_')
        } else if (i > 0 && i % 2 != 0 && j == column - 1) {
          arr.push('|')
        } else if (i > 0 && i % 2 == 0 && j == 0) {
          arr.push('|')
        } else if (i == row - 1 && i % 2 != 0 && j == 0) {
          arr.push('o')
        } else if (i == row - 1 && i % 2 == 0 && j == column - 1) {
          arr.push('o')
        }
        else {
          arr.push('_')
        }
      }
      arrHasil.push(arr.join(''));
    }
    console.log(arrHasil.join('\n'));
  }
}

generateSnake(4, 6);
console.log('\n');
generateSnake(1, 30);
console.log('\n');
generateSnake(2, 30);
console.log('\n');
generateSnake(10,10)
console.log('\n');
generateSnake(0,0);
console.log('\n');
generateSnake(1,1)
console.log('\n');
console.log('15X10');
generateSnake(15,10)
