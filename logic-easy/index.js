//your code here
function dominoCard(param1, param2) {

  const candidate = []
  const recomendation = []

  if (!param2) {

    return `tutup 1 kartu`

  } else {

    for (var i = 0; i < param1.length; i++) {

      if (param1[i][0] == param2[0] || param1[i][1] == param2[0]) {

        candidate.push(param1[i])

      } else if (param1[i][0] == param2[1] || param1[i][1] == param2[1]) {

        candidate.push(param1[i])

      }

    }

  }

  let biggestCard = candidate[0]

  for (var i = 0; i < candidate.length; i++) {

    if (candidate[i][0] >= biggestCard[0] && candidate[i][0] >= biggestCard[1]) {

      biggestCard = candidate[i]

    }

  }

  console.log(`keluarkan kartu`, biggestCard);

  return ''

}

console.log(dominoCard([[3,3], [6,5], [3,4], [2,1]], [3,5])); // kelurkan kartu [6,5]
console.log(dominoCard([[3,3], [6,5], [3,4], [2,1]], [3,4])); // kelurkan kartu [3,4]
console.log(dominoCard([[2,4], [6,6], [3,6], [1,5]])); // tutup 1 kartu
