//your code here
function dominoCard(dominoRedFox, deckCard){

  var arrPilihan = []
  console.log('kartu index 0:',deckCard[0])
  for(var i=0; i<dominoRedFox.length; i++){
    // console.log('>>>>>',dominoRedFox[i][0])
    // console.log(typeof('deck',deckCard[0]))
    // console.log(typeof('red',dominoRedFox[i][0]))
    if(deckCard[0] == dominoRedFox[i][0]){
      // console.log('dek ke ${i}',deckCard[0])
      // console.log(dominoRedFox[i])
      arrPilihan.push(dominoRedFox[i])
    }
  }

  for(let i=0; i<dominoRedFox.length; i++){
    // console.log(dominoRedFox[i])
    if(deckCard[1] === dominoRedFox[i][1]){
      // console.log(dominoRedFox[i])
      arrPilihan.push(dominoRedFox[i])
    }
  }

  // console.log(arrPilihan)
  let pilihanKartu = []
  if(arrPilihan.length === 0){
    console.log('tutup 1 kartu')
  }
  else {
    var max = 0
    for(let j=0; j<arrPilihan.length; j++){
      let pilihan = arrPilihan[j].join('')
      if(max<pilihan){
        max = pilihan
      }
      else(
        max = max
      )
    }
    console.log(`keluarkan kartu [${max.split('')}]`)

    // console.log(arrPilihan)
    // var max = 0
    // var arrJoin = []
    // for(let j=0; j<arrPilihan.length; j++){
    //   arrJoin.push(arrPilihan[j].join(''))
    // }
    // console.log(arrJoin)
    // console.log(`keluarkan kartu [${max.split('')}]`)

  }
}

//DRIVER CODE
// dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
// dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
