function lompatanKuda(kordinat) {

    let outBox = []
    let abjad ='abcdefgh'
    let jalanKuda = []

    for (let row = 8; row > 0; row--) {
        
        let insideBox = []

        for (let col = 1; col <= abjad.length; col++) {
            
            if (abjad[col] === kordinat[0] && row === kordinat[1]) {


            }
        }

        outBox.push(insideBox)
    }
    
    return outBox
    
}

console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8

[ [ 8, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 7, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 6, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 5, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 4, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 3, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 2, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ],
  [ 1, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ] ]
    'a','b','c','c','e','f','g','h'
