//your code here
function dominoCard(nestedArr, arr) {
var arrJumlah=[];	
	//cari yang cocok dengan arr
	for(var i=0;i<nestedArr.length;i++) {
		for(var j=0;j<nestedArr[i].length;j++) {
			if(arrJumlah.length!==i+1){
				if(j===0) {
					if(nestedArr[i][j]===arr[0] || nestedArr[i][j]===arr[1]) {
						arrJumlah.push(nestedArr[i][j]+nestedArr[i][j+1]);
						//count++
					}
				}	 
				else if(j===1) {
					if(nestedArr[i][j]===arr[0] || nestedArr[i][j]===arr[1]) {
						arrJumlah.push(nestedArr[i][j]+nestedArr[i][j-1])
					} 		
				}
			}		
		}
	}


var max=Math.max(...arrJumlah);
	//cari yang jumlah arrJUmlah===nestedArr
	for(var k=0;k<nestedArr.length;k++){
		if(nestedArr[k][0]+nestedArr[k][1]===max) {
			return ("keluarkan kartu "+ "[" +nestedArr[k]+"]")
		}
	}
	return "tutup 1 kartu"
			
}		


//driver code
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5])) //”keluarkan kartu [6,5]”
console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3])) //"keluarkan kartu [3,4]"
console.log(dominoCard([[2,4],[6,6],[3,6]],[1,5])) //”tutup 1 kartu”


