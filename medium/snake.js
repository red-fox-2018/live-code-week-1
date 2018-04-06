function generateSnake(head, side) {
  //your code here
  let output = [];
  let start = 1;
  let result = ''
  for (let row = head-1; row >= 0; row--) {
    output[row] = [];
    let rowGenap = row % 2 === 0;
    let sideGenap = side % 2 === 0;
    if (rowGenap === false && sideGenap === true || rowGenap === true && sideGenap === false) {
      for (col = 0; col < side; col++) {
        output[row][col] = start
        if(start === 1) {
          output[row][col] = '~'
        }else if (start === head*side){
          output[row][col] = 'o'
        }else if(col === 0) {
          output[row][col] = '|'
        }else {
          output[row][col] = '_'
        }
        start++
      }
    }else {
      for (col = side-1; col >= 0; col--) {
        output[row][col] = start;
        if(start === 1) {
          output[row][col] = '~'
        }else if (start === head*side){
          output[row][col] = 'o'
        }else if(col === side-1) {
          output[row][col] = '|'
        }else {
          output[row][col] = '_'
        }
        start++
      }
    }
    console.log(output[row].join(''))
  }
  return output;
  // return output;
}

generateSnake(3, 6);
// generateSnake(1,30);
// generateSnake(6, 10);
