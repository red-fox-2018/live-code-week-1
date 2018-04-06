//kartu yang keluar harus sama dengan salah 1 kartu
//di dec.k jumlah kartu indxe

function dominoCard(kartuSendiri,kartuDeck){
    var deck = kartuDeck
    var tampungKartu =[]
    
    // var obj={}
    for(var i=0; i<kartuSendiri.length; i++){
        for(var j=0; j<kartuSendiri[i].length; j++){
            if(kartuSendiri[i][j]===kartuDeck[0] || kartuSendiri[i][j]===kartuDeck[1]){
                tampungKartu.push(kartuSendiri[i])
                // obj[kartuSendiri[i]]=0
            }
        }
    }
    if(tampungKartu.length<=0){
        return "tutup 1 kartu"
    }
    else{
        var sortTampungKartu=tampungKartu.sort()
        return sortTampungKartu[sortTampungKartu.length-1]
    }

    
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]))//"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”)