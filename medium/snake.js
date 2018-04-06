
function generateSnake(row, column) {
    var array =[]
    for(var i=0; i<row; i++){
        array.push([])
        for(var j=0; j<column; j++){
            if(i==0 && j==0){
                array[i].push("~")
            }
            else if(i==(row-1) && j==0){
                array[i].push("o")
            }
            else if(i==(row-1)&& j==(column-1)){
                array[i].push("|")
            }
            else if(j==0){
                array[i].push("|")
            }
            else{
                array[i].push("_")
            }
        }
    }
    var str=""
    for(var i=0; i<array.length; i++){
        if(i%2!==0){
            array[i].reverse()
        }
        if(i==array.length-1){
            array[i].reverse()
        }
        str+=array[i].join("") + "\n"
    }

    return str
  }
  
  console.log(generateSnake(6, 10));