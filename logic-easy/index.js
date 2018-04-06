//your code here
function dominoCard(card, handCard) {
    let max = Math.max(...handCard);
    let findMax = 0;
    let result = [];

    for (let i = 0; i < card.length; i++) {
        if (card[i].includes(max) === true) {
            result.push(card[i]);
        }
    }

    if (result.length === 1) {
        console.log(`keluarkan kartu [${result[0]}]`);
    } else if (result.length === 0) {
        console.log(`tutup 1 kartu`);
    } else {
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                if(findMax < result[i][j]) {
                    findMax = result[i][j];
                }
            }
        }
    }

    result.forEach(data => {
        if(data.includes(findMax) === true) {
            console.log(`keluarkan kartu [${data}]`);
        }
    });
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
dominoCard([[3,3],[4,5],[3,4],[2,1]], [4,1]) //”keluarkan kartu [4,5]”