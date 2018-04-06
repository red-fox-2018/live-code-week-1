function generateSnake(row, col) {
var arrRow=[]
console.log(row,col);
  for (var i = 0; i < row; i++) {
    var arrCol=[]
    for (var j = 0; j <= col; j++) {
      if(i==0 &&j==0){
        arrCol.push('~')
      }else if( j == col && i==1){
        console.log('masuk');
        arrCol.push('|')
      }else if( i =row= col && j==0){
        console.log('masuk');
        arrCol.push('o')
      }else{
        arrCol.push('_')
      }


    }
    arrRow.push(arrCol.join(''))
  }

return arrRow
}

console.log(generateSnake(3, 20));
