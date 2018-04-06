var dominoCard = function(kartuditangan,kartudimeja){
    let max = 0;
    let kartuyangmaudikeluarin = [];
    for(let i=0;i<kartuditangan.length;i++){
        if(kartuditangan[i][0] === kartudimeja[0] || kartuditangan[i][1] === kartudimeja[0] || kartuditangan[i][0] === kartudimeja[1] || kartuditangan[i][1] === kartudimeja[1]){
            if(kartuditangan[i][0]+kartuditangan[i][1] > max){
                max = kartuditangan[i][0]+kartuditangan[i][1];
                kartuyangmaudikeluarin[0] = kartuditangan[i][0]
                kartuyangmaudikeluarin[1] = kartuditangan[i][1]
            }
        }
    }
    if(kartuyangmaudikeluarin.length === 0){
        console.log('tutup 1 kartu');
    }
    else{
        console.log('Keluarkan kartu ' + kartuyangmaudikeluarin);
    }
}
dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) //”tutup 1 kartu”
