function generateSnake(row, column) {
  //your code here
  if(row < 1 || column < 1){
    return "row atau column minimal harus 1"
  }
  let mainboard=[]
  for(let i=0; i<row; i++){
    let arrInside = []
    for(let j=0; j<column; j++){
      if(i == (row-1) && j == 0){
        arrInside.push("o")
      } else if( i == 0 && j == (column-1)){
        arrInside.push("~")
      }else if(j == column-1){
        arrInside.push("|")
      }else{
        arrInside.push("_")
      }
    }
    if(i % 2 == 0){
      arrInside.reverse()
    }
    mainboard.push(arrInside.join(""))
  }
  return mainboard.join("\n")

}

console.log(generateSnake(0,7));
