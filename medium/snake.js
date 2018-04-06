function generateSnake(row, column) {
  //your code here
  if(row == 0 || column == 0){
    console.log('row atau column minimal harus 1')
  }

  // let kolom = '~'
  // for(let i=0; i<row; i++){
  //   // console.log(i)
  //
  //   for(let j=0; j<column; j++){
  //     // console.log('ini kilom',j)
  //     if(j==column-1 && i==row-1){
  //       kolom += 'o'
  //     }
  //     // else if(j%9==0){
  //     //   kolom += '|'
  //     // }
  //     else {
  //       kolom += '_'
  //     }
  //   }
  // }
  // console.log(kolom)
  let arrUlar = []
  for(let i=0; i<row; i++){
    let baris = []
    for(let j=0; j<column; j++){
      if(j==column-1 && i==row-1){
        baris.push('o')
      }
      else if(i==0 && j < 1){
        baris.push('~')
      }
      else if(j < 1){
        baris.push('|')
      }
      else {
        baris.push('_')
      }
    }
    arrUlar.push(baris)
  }
  // console.log(arrUlar)
  for(let j=0; j<arrUlar.length; j++){
    // console.log(arrUlar[j])
    if(j%2==1){
      arrUlar[j].reverse()
    }
  }
  // console.log(arrUlar)

  for(let j=0; j<arrUlar.length; j++){
    console.log(arrUlar[j].join(''))
  }


}

generateSnake(0, 0)
generateSnake(1,30)
generateSnake(6,10)
generateSnake(3,15)
