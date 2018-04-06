//your code here
function dominoCard(masukkanCard,keluaranCard) {
	// body...
	var tampungCard = []
	var tampungHasilTerbesar = []
	var counter = 0
	for(var i=0;i<masukkanCard.length;i++){
		for(var j=0;j<masukkanCard[i].length;j++){
			if (masukkanCard[i][j]===keluaranCard[0] || masukkanCard[i][j]===keluaranCard[1]) {
				tampungCard.push(masukkanCard[i])
				counter++
			}
		}
	}
	for(var i=0;i<tampungCard.length;i++){
		tampungHasilTerbesar.push(tampungCard[i][0]+tampungCard[i][1])
	}
	// let pembanding = 0
	// var index = 0
	// // for(var i=0;i<tampungHasilTerbesar.length;i++){

	// // }
	var index = 0
	var kombinasiTerbesar = Math.max.apply(null, tampungHasilTerbesar)
	for(var i=0;i<tampungHasilTerbesar.length;i++){
		if (tampungHasilTerbesar[i]===kombinasiTerbesar) {
			index = i
		}
	}
	if (counter!==0) {
		console.log('keluarkan kartu',tampungCard[index]);
	}
	else{
		console.log('tutup 1 kartu');
	 return 
	}
}
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]],[3,5]))
console.log(dominoCard([[1,1][1,1],[1,1],[1,1]],[2,2]));
