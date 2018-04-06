var board = [
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
]

function lompatanKuda(koordinat){
  console.log(koordinat)
  let kamusKolom = [
    ['A',0],
    ['B',1],
    ['C',2],
    ['D',3],
    ['E',4],
    ['F',5],
    ['G',6],
    ['H',7],
  ]
  let kamusBaris = [
    ['1',7],
    ['2',6],
    ['3',5],
    ['4',4],
    ['5',3],
    ['6',2],
    ['7',1],
    ['8',0],
  ]

  let baris = 0
  for(let i=0; i<kamusBaris.length; i++){
    if(koordinat[1] === kamusBaris[i][0]){
      baris = kamusBaris[i][1]
    }
  }
  console.log('barisssss',baris)

  let kolom = 0
  for(let j=0; j<kamusKolom.length; j++){
    if(koordinat[0] === kamusKolom[j][0]){
      kolom = kamusKolom[j][1]
    }
  }
  console.log('kolommmm',kolom)

  let jmlLangkahKuda = 0
  // let kiriAtas1 = [baris-2,kolom-1]
  if(baris-2 > 0 && kolom-1 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris-1 > 0 && kolom-2 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris-2 > 0 && kolom+1 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris-1 > 0 && kolom+2 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris+2 < 8 && kolom-1 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris+1 < 8 && kolom-2 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris+2 < 8 && kolom-1 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris+2 < 8 && kolom+1 > 0){
    jmlLangkahKuda += 1
  }
  else if(baris+1 < 8 && kolom+2 > 0){
    jmlLangkahKuda += 1
  }

  console.log(`kuda memiliki ${jmlLangkahKuda} langkah`)
}

lompatanKuda('A1')
