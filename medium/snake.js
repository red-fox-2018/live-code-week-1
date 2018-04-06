function generateSnake(row, column) {
  //your code here
  if(row <= 0 || column <= 0){
    return console.log('row atau column minimal harus 1');
  } else if(row == 1 && column ==1){
    return console.log('o');
  }

  let arrRow = []
  for(let i = 0; i < row; i++){
    let arrColumn = []
    for(let j = 0; j < column; j++){

      if(row == 1){
        if(j == 0){
          arrColumn.push('~')
        } else if ( j == column -1){
          arrColumn.push('o')
        } else {
          arrColumn.push('_')
        }
      } else if (row%2 != 0){
        if(i == 0 && j == 0){
          arrColumn.push('~')
        } else if (i == row-1){
          if (j == column-1){
            arrColumn.push('o')
          } else if (j == 0){
            arrColumn.push('|')
          } else {
            arrColumn.push('_')
          }
        } else if ( i != 0 && i != row-1){
          if (i%2 == 0 && j == 0){
            arrColumn.push('|')
          } else if(i%2 != 0 && j == column-1){
            arrColumn.push('|')
          } else {
            arrColumn.push('_')
          }
        } else {
          arrColumn.push('_')
        }
      } else {
        if(i == 0 && j == 0){
          arrColumn.push('~')
        } else if (i == row-1){
          if(j == 0){
            arrColumn.push('o')
          } else if(j == column-1){
            arrColumn.push('|')
          } else {
            arrColumn.push('_')
          }
        } else if ( i != 0 && i != row-1){
          if (i%2 == 0 && j == 0){
            arrColumn.push('|')
          } else if(i%2 != 0 && j == column-1){
            arrColumn.push('|')
          } else {
            arrColumn.push('_')
          }
        } else {
          arrColumn.push('_')
        }
      }

    }
    arrRow.push(arrColumn)
  }
  console.log(arrRow);
}

generateSnake(3, 6);
generateSnake(6, 10);
generateSnake(1, 10);
