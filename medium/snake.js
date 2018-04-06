// // generateSnake(row, column)
// // berikut adalah hasil: generateSnake(6,10)
// ~_________
// _________|
// |_________
// _________|
// |_________
// o________| row terakhir, row ganjil
//
// // berikut adalah hasil: generateSnake(1,30)
// ~____________________________o
//
// // berikut adalah hasil: generateSnake(3,20)
// ~___________________
// ___________________|
// |__________________o row terakhir, row genap
//
// // bagaimana dengan generateSnake(1,1) ? tampilkan kepalanya saja
// o
//
// // bagaimana dengan generateSnake(0,0) ? tampilkan pesan
// row atau column minimal harus 1
function generateSnake(row, column) {

  if (row === 0 || column === 0) {
    return console.log('row atau column minimal harus 1');
  } else if (row === 1 && column === 1) {
    return console.log('o');;
  } else {
    if (row == 1) {
      for (var j = 0; j < column; j++) {
        if (j == 0) {
          hasil += '~'
        } else if (j === column - 1){
          hasil += 'o'
        } else {
          hasil += '_'
        }
      }
    } else if (row > 1) {
      let hasil = ''
      for (var i = 0; i < row; i++) {
        hasil = ''
        for (var j = 0; j < column; j++) {
          if (j === 0 && i === 0) {
            hasil += '~'
          }
          if (i === 0 && j !== 0){
            hasil += '_'
          }
          if (i !== 0) {
            if (i % 2 !== 0 && i !== row - 1) {
              if (j == column - 1) {
                hasil += '|'
              } else {
                hasil += '_'
              }
            } else if (i % 2 === 0 && i !== row - 1) {
              if (j == 0) {
                hasil += '|'
              } else {
                hasil += '_'
              }
            } else if (i % 2 !== 0 && i == row - 1) {
              if (j == 0) {
                hasil += 'o'
              }else if (j == column - 1) {
                hasil += '|'
              } else {
                hasil += '_'
              }
            } else if (i == row - 1 && i % 2 == 0) {
              if (j == 0) {
                hasil += '|'
              }else if (j == column - 1) {
                hasil += 'o'
              } else {
                hasil += '_'
              }
            }
          }
        }
        console.log(hasil);
      }
    }
  }
  return
}

generateSnake(0,0);;
