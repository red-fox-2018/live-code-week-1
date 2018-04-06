function lompatanKuda(move){
    let board = []
    let kolom = "ABCDEFGH"
    for(let i=8;i>=1;i--){
        let tampung = []
        for(let k=0;k<8;k++){
           tampung.push(kolom[k]+i)
        }
        board.push(tampung)
    }

    return board

}

console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8