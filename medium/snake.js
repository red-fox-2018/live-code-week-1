function generateSnake(row, column) {
  //your code here
  var arrSnake = []
  for(let k =0; k < row;k++){
      arrSnake.push([])
  }
  if(row === 0 || column === 0){
    console.log('row atau col minimal harus 1')
  }else if(row > 1){
    for(let i =0; i < row;i++){
      for(let j = 0; j <column; j++){
        //ekor
          if(i ===0 && j ===0){
              arrSnake[i].push('~')
          }else if(i %2 === 0 && i === row-1){
              if(j === 0){
                arrSnake[i].push('|')
              }else if(j === column -1){
                arrSnake[i].push('o')
              }else{
                arrSnake[i].push('_')
              }
          } else if(i %2 !== 0 && i === row-1){
                if(j === 0){
                  arrSnake[i].push('o')
                }else if(j === column -1){
                  arrSnake[i].push('|')
                }else{
                  arrSnake[i].push('_')
                }
          }else if(i %2 !== 0 && j === column -1){
              arrSnake[i].push('|')
          }else if(i %2 === 0 && j === 0){
            arrSnake[i].push('|')
        }else{
          arrSnake[i].push('_')
        }
      }
    }
    print(arrSnake)
  }else if(row === 1 && column === 1){
      console.log('o')
  }else if(row = 1 && column >1){

      for (var m = 0; m < column; m++) {
          if(m===0){
            arrSnake[0].push('~')
          }else if (m === column - 1) {
            arrSnake[0].push('o')
          }else if(m!==0 && m !== column - 1){
            arrSnake[0].push('_')
          }
      }

      print(arrSnake)
  }
}

function print(arr){
  for (let l = 0; l < arr.length; l++) {
    var output = ''
    output += arr[l].join('');
    console.log(output)
  }
}

generateSnake(4, 6);
generateSnake(1, 30);
generateSnake(3, 20);
generateSnake(1, 1);
generateSnake(0,0)
