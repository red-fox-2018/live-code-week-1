/*jshint esversion:6*/
/*
set result = ''
LOOP index i kurang dari row
LOOP index j kurang darin column
IF index row 0 dan index column === 0 maka isi result '~' dan '_'
IF index i === row > 0 dan index j column ujung awal dan akhir maka isi result '|' dan
IF index i === row > 0 dan index j column bukan awal dan akhir maka isi result'_'
else if index j terakhir dari column dan index i === row-1 maka isi result 'o'
tampilkan result
*/

function generateSnake(row, column) {
  let result = '';
  if (row === 0 && column === 0) {
    console.log(`row atau column minimal harus 1`);
  } else {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (j === 0 && i === 0) {
          result += '~';
          result += '_';
        }
        if(j === 0 || j === column && i > 0 && i < row-1){
          // result +='|';
          result +='_';
        }
        if (i === row) {
          result +='_';
        } else if (j === column && i === row) {
          result +='o';
        }
      }
    }

  }
  console.log(result);
}

generateSnake(3, 6);
// generateSnake(0, 0);
