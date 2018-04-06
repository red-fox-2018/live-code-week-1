function dominoCard(kartu, deck){
    
    let result = []
    for(let i=0;i<kartu.length;i++){
        var tampung = []
        for(let k=0;k<kartu[i].length;k++){
            if(k%2!=0){
                if(kartu[i][0]==deck[0] || kartu[i][0]==deck[1]){
                    tampung.push(kartu[i][0]+kartu[i][1])
                }
            }else{
                if(kartu[i][1]==deck[1] || kartu[i][1]==deck[0]){
                    tampung.push(kartu[i][0]+kartu[i][1])
                }
            } 
        }
        result.push(tampung)
    }

    var max = 1;
    for(let i=0;i<result.length;i++){
        for(let k=0;k<result[i].length;k++){
            if(result[i][k]>max){
                max = result[i][k]
            }
        }   
    }

    var index = ""
    for(let i=0;i<result.length;i++){
        for(let k=0;k<result[i].length;k++){
            if(result[i][k]==max){
                index += i+k
            }   
        }
    }

    if(kartu[index]==undefined){
        return "tutup 1 kartu"
    }
    return "keluarkan kartu " + "["+kartu[index]+"]" 
}


console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”