var abjad = 'ABCDEFGH'
var nomor = '87654321'
function lompatanKuda(str){
    let coorX = abjad.indexOf(str[0])
    let coorY = nomor.indexOf(str[1])
    let countPossible = 0

    if(coorX-2 >= 0 && coorY-1 >= 0){
        countPossible ++
    }
    if(coorX-1 >= 0 && coorY-2 >= 0){
        countPossible ++
    }
    if(coorX+1 < 8 && coorY-2 >=0){
        countPossible ++
    }
    if(coorX+2 < 8 && coorY-1 >=0){
        countPossible ++
    }
    if(coorX+2 < 8 && coorY+1 < 8){
        countPossible ++
    }
    if(coorX+1 < 8 && coorY+2 < 8){
        countPossible ++
    }
    if(coorX-1 >=0 && coorY+2 < 8){
        countPossible ++
    }
    if(coorX-2 >=0 && coorY+1 < 8){
        countPossible ++
    }

    return countPossible
}

console.log(lompatanKuda('A1')) // 2
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8
console.log(lompatanKuda('E4')) // 8
