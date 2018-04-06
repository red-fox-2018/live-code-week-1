//your code here
function dominoCard(playerCard, deckCard) {

    let kartuSama = []
    let jumlahKartu = []
    let result = []

    for (let i = 0; i < playerCard.length; i++) {

        for (let j = 0; j < deckCard.length; j++) {
            
            if (deckCard[j] === playerCard[i][j]) {

                kartuSama.push(playerCard[i])
                jumlahKartu.push(playerCard[i][0] + playerCard[i][1])

            }
        }

    }

    
    let sum = Math.max.apply(null, jumlahKartu)

    for (let k = 0; k < jumlahKartu.length; k++) {
        
        if (jumlahKartu[k] === sum) {

            result.push(kartuSama[k])
        }
    }

    if (result.length !== 0) {

        console.log(result)
    } else {

        console.log('Tutup kartu');
    }
    
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
