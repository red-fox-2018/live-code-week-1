function lompatanKuda(coordinate) {

  const alphabet = '_ABCDEFGH'
  const coordinateNumber = []
  const recomendation = []

  for (var i = 0; i < alphabet.length; i++) {
    coordinateNumber.push(alphabet.indexOf(coordinate[0]))
    coordinateNumber.push(+(coordinate[1]))
    break
  }

  for (var i = 1; i <= 8; i++) {

    for (var j = 1; j <= 8; j++) {

      if (i == coordinateNumber[0]-1) {

        if (j == coordinateNumber[1] + 2) {

          recomendation.push([i+1, j])

        } else if (j == coordinateNumber[1] - 2) {

          recomendation.push([i+1, j])

        }

      }else if (i == coordinateNumber[0]+1) {

        if (j == coordinateNumber[1] + 2) {

          recomendation.push([i+1, j])

        } else if (j == coordinateNumber[1] - 2) {

          recomendation.push([i+1, j])

        }

      }else if (i == coordinateNumber[0]-2) {

        if (j == coordinateNumber[1] + 1) {

          recomendation.push([i+1, j])

        } else if (j == coordinateNumber[1] - 1) {

          recomendation.push([i+1, j])

        }

      }else if (i == coordinateNumber[0]+2) {

        if (j == coordinateNumber[1] + 1) {

          recomendation.push([i+1, j])

        } else if (j == coordinateNumber[1] - 1) {

          recomendation.push([i+1, j])

        }

      }

    }

  }

  return recomendation.length

}

console.log(lompatanKuda('E4')); // 8
console.log(lompatanKuda('A1')); // 2
console.log(lompatanKuda('G7')); // 4
console.log(lompatanKuda('C4')); // 8


/*

  INPUT = E4 => (koordinat = (5, 4))

  OUTPUT =

  => 4, 2 () == -1 == -2
  => 4, 6 () == -1 == +2
  => 6, 6 () == +1 == +2
  => 6, 2 () == +1 == -2
  => 3, 5 () == -2 == +1
  => 3, 3 () == -2 == -1
  => 7, 5 () == +2 == +1
  => 7, 3 () == +2 == -1

  total = 8

*/
