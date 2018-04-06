function lompatanKuda(posisi){
    var row= "ABCDEFGH".split("")
    var column =["1","2","3","4","5","6","7","8"]
    var arrTemp=[]
    
    var posisiSplit=posisi.split("")
    var indexRowPlus=row.indexOf(posisiSplit[0])
    var indexColumnPlus=column.indexOf(posisiSplit[1])
    var indexColumnMines=column.indexOf(posisiSplit[1])
    var indexRowMines=column.indexOf(posisiSplit[0])

    for(var i=0; i<2; i++){ 
        if(indexRowPlus!==-1 || indexColumnPlus!==-1 || indexColumnMines!==-1 ||indexRowMines!==-1){
            indexRowPlus++
            indexColumnPlus++
            arrTemp.push(row[indexRowPlus])
            arrTemp.push(column[indexColumnPlus])
            console.log(indexColumnMines)
            indexRowMines=-1
            indexColumnMines=-1
            console.log("row === > ",indexRowMines)
            console.log("column=>> ",indexColumnMines)
            arrTemp.push(row[indexRowMines])
            arrTemp.push(column[indexColumnMines])
        }
    }
    console.log(arrTemp)
   
    

}

console.log(lompatanKuda('E4')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8