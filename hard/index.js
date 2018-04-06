function generateBoard(){
  let hasil = []
  let arrayHuruf = ['A','B','C','D','E','F','G','H']
  let arrayAngka = [8,7,6,5,4,3,2,1]
  for (var i = 0; i < arrayAngka.length; i++) {
    hasil.push([])
    for (var j = 0; j < arrayHuruf.length; j++) {
      hasil[i].push(arrayHuruf[j]+String(arrayAngka[i]))
    }
  }
  return hasil
}
function lompatanKuda(koordinat) {
  let board = generateBoard()
  let possibilities = 0
  for (var row = 0; row < 8; row++) {
    for (var column = 0; column < 8; column++) {
      if (koordinat == board[row][column]) {
        console.log('yes');
        if (board[row-2][column+1] !== undefined) {
          possibilities ++
        }
        if (board[row-1][column+2] !== undefined) {
          possibilities++
        }
        if (board[row+1][column+2] !== undefined) {
          possibilities++
        }
        if (board[row+2][column+1] !== undefined) {
          possibilities++
        }
        if (board[row+2][column-1] !== undefined) {
          possibilities++
        }
        if (board[row+1][column-2] !== undefined) {
          possibilities++
        }
        if (board[row-1][column-2] !== undefined) {
          possibilities++
        }
        if (board[row-2][column-1] !== undefined) {
          possibilities++
        }
      }
    }
  }
  return possibilities
}
console.log(lompatanKuda('E4'));
