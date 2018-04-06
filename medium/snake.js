function generateSnake(row, column) {
  let board = [];
  if(row > 0 && column > 0){
    for(let i=0;i<row;i++){
      board.push([]);
      let body = [];
      for(let j=0;j<column;j++){
        if(i === 0 && j===0){
          body.push('~');
        }
        else if(i!==0 && j === column-1){
          body.push('|')
        }
        else if(i === row-1 && j === 0 || i === row-1 && j === column-1){
          body.push('o')
        }
        else{
          body.push('_');
        }
      }
      if(i>1 && i%2 === 0){
        let line = body.reverse().join('');
        board[i].push(line);   
      }
      else{
        let line = body.join('');
        board[i].push(line);
      }
    }
    return board;
  }
  return 'row atau column minimal harus 1';
}

console.log(generateSnake(6, 6));
