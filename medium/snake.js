function generateSnake(row, column) {
  //your code here

  const snake = []
  let body = []

  if (row == 0 || column == 0) {

    return `row atau column minimal harus 1`;

  } else if (row == 1 && column == 1) {

    return 'o'

  }

  for (var i = 0; i < row; i++) {

    for (var j = 0; j <= column; j++) {

      if (j == column-1 && i % 2 == 1) {

        body.push('|')

      } else if (j == 0 && i % 2 == 0) {

        if (i == 0 && j == 0) {

          body.push('~')

        } else {

          body.push('|')

        }

      } else if (i == 0 && j == 0) {

        body.push('~')

      } else if (body.length < column) {

        if (i == row-1 && j == 0 && row % 2 == 0) {

          body.push('o')

        } else if (i == row-1 && j == column-1 && row % 2 == 1) {

          body.push('o')

        }else {

          body.push('_')

        }

      } else {

        if (j != 0) {

          snake.push(body.join(''))
          body = []

        }

      }

    }

  }

  return snake.join('\n')

}

console.log(generateSnake(6, 10));

/*
~_________
_________|
|_________
_________|
|_________
o________|

*/

// console.log(generateSnake(1,30));

/*
~____________________________o

*/

// console.log(generateSnake(3,20));

/*
~___________________
___________________|
|__________________o
*/

// console.log(generateSnake(1,1));
/*
o
*/

// console.log(generateSnake(0,0));

/*
row atau column minimal harus 1
*/
