function generateSnake(row, column) {
  if(row === 1 && column === 1){
    return 'o';
  }

  if(row === 0 || column === 0){
    return 'Row atau Colum harus minimal 1';
  }


  var result = [];
  for(var i = 0 ; i < row ; i++){
    var arrRow = [];
    for(var j = 0 ; j < column ; j++){
      if(i===0 && j===0){
        arrRow.push('~');
      }
      else if(i === row -1 && j === column -1){
        arrRow.push('o');
      }
      else if(i%2 !== 0 && j === column -1 && i !== 0){
          arrRow.push('|');
        }
    else if(i%2 === 0 && j === 0){
          arrRow.push('|');
        }
    else{
      arrRow.push('_');
      }
    }
    result.push(arrRow.join(''));
  }
  return result.join('\n');
}

console.log(generateSnake(6, 10));
