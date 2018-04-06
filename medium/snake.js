function generateSnake(jumlahRow, column) {
  var total = column*jumlahRow
  for (let row = 0; row < jumlahRow; row++) {
    var step = ''
    if(row!=0 && row!=jumlahRow-1){
      step += '|'
    }
    else if (jumlahRow % 2 == 1 && row != 0) {
      step += '|'
    }
    else if (jumlahRow % 2 == 0 && row != row!=0) {
      step += '|'
    }
    var start = total - (column*row)
    var end = start - column
    if (row % 2 == 0 || row==0) {
      for (let col = start; col > end; col--) {
        if(col==total){
          step+='~_'
        }
        else if(col==1){
          step+='_o'
        }
        else{
          step+='_'
        } 
      }
    }
    else if (row % 2 == 1) {
      for (let col = end + 1; col <= start; col++) {
        if (col == total) {
          step += '_~'
        }
        else if (col == 1) {
          step += 'o_'
        }
        else {
          step += '_'
        }
        
      }
    }
    if(row!=0 && row!=jumlahRow-1){
      step += '|'
    }
    else if(jumlahRow%2==1 &&row!=jumlahRow-1){
      step+='|'
    }
    else if (jumlahRow % 2 == 0 && row != jumlahRow - 1) {
      step += '|'
    }
    console.log(step)
  }
}

generateSnake(3, 6);
generateSnake(6, 10);
generateSnake(3, 20);

