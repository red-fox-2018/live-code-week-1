function dominoCard (ourCard , deck){
  var result = [];
  var tmp = [];

  for(var a = 0 ; a < ourCard.length ; a++){
    if(ourCard[a][0] === deck[0] || ourCard[a][1] === deck[1] || ourCard[a][0] === deck[1] || ourCard[a][1] === deck[0]){
      var biggestcard = ourCard[a][0] + ourCard[a][1];
      tmp.push(biggestcard);
      tmp.sort();
    }
  }

  for(var i = 0 ; i < ourCard.length ; i++){
    if(ourCard[i][0] === deck[0] || ourCard[i][1] === deck[1] || ourCard[i][0] === deck[1] || ourCard[i][1] === deck[0]){
      var total = ourCard[i][0] + ourCard[i][1];
      var terbesar = Math.max(...tmp);
      if(terbesar === total){
        result.push(ourCard[i]);
      }
    }
  }

  if(result.length < 1){
    return 'tutup 1 kartu';
  }

  return 'keluarkan kartu '+ '['+result+']';
}




console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])); //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])); //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])); //”tutup 1 kartu”
