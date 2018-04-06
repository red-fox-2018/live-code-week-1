function generateSnake(row, column) {
  //your code here

  let outsideBox = []

  for (let i = 0; i < row; i++) {
    
    let insideBox = []
    for (let j = 0; j < column; j++) {
      
      if (i == 0 && j == 0) {

        insideBox.push('~')
      } else if(i == row -1 && j == column -1) {

        insideBox.push('o')
      } else if (i > 0) {
          if(i % 2 !== 0 && j === column-1) {

          insideBox.push('|')
        } else if(i % 2 === 0 && j === 0) {
  
          insideBox.push('|')
        } else {

          insideBox.push('_')
        }
      } else {

        insideBox.push('_')
      }
    }

    outsideBox.push(insideBox.join(''))
  }

  if (row === 1 && column === 1) {

    return 'o'
  } else if (row === 0 || column === 0) {

    return 'row atau column minimal harus 1'
  } else {

    return outsideBox.join('\n')
  }
}

console.log(generateSnake(1,10))
console.log(generateSnake(1,1))
console.log(generateSnake(1,0))
console.log(generateSnake(3,4))
