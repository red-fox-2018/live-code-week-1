
function generateIndex() {
  var indexCatur = [];
  var alphabet = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  for (var i = 8; i > 0; i--) {
    var arr = [];
    for (var j = alphabet.length - 1; j >= 0; j--) {
      arr.push(alphabet[j] + i)
    }
    indexCatur.push(arr)
  }
  return indexCatur;
}

/*
[ [ 'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8' ],
  [ 'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7' ],
  [ 'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6' ],
  [ 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5' ],
  [ 'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4' ],
  [ 'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3' ],
  [ 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2' ],
  [ 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1' ] ]
*/

function lompatanKuda(index) {
  var board = generateIndex();

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      debugger;
      var posisiSekarang = board[i][j];
      if (posisiSekarang == index) {
        var alphabetPosisiSekarang = posisiSekarang[0];
        var nomorPosisiSekarang = posisiSekarang[1];

        if (alphabetPosisiSekarang == 'A' || alphabetPosisiSekarang == 'H') {
          if (nomorPosisiSekarang == 8 || nomorPosisiSekarang == 1) {
            return 2
          } else if (nomorPosisiSekarang == 7 || nomorPosisiSekarang == 2) {
            return 3;
          } else {
            return 4;
          }
        } else if (alphabetPosisiSekarang == 'G' || alphabetPosisiSekarang == 'B') {
          if (nomorPosisiSekarang == 1 || nomorPosisiSekarang == 8) {
            return 3;
          } else if (nomorPosisiSekarang == 2 || nomorPosisiSekarang == 7) {
            return 4;
          } else {
            return 6;
          }
        } else {
          if (nomorPosisiSekarang == 1 || nomorPosisiSekarang == 8) {
            return 4;
          } else if (nomorPosisiSekarang == 2 || nomorPosisiSekarang == 7) {
            return 6;
          } else {
            return 8;
          }
        }
      }
    }
  }
}

console.log(lompatanKuda('A1')) // 2
console.log(lompatanKuda('A2')) // 3
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8
console.log('\n');
console.log(lompatanKuda('D8')) // 4
console.log(lompatanKuda('F5')) // 8
console.log(lompatanKuda('H5')) // 4
console.log(lompatanKuda('H7')) // 3
