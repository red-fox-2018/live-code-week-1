function generateSnake(row, column) {
  //your code here
  //buat selain kondisi (1,1)
	var multiDim=[];

	// if(row===0 && column===0){
	// 	return "row atau column minimal harus 1"
	// }

	// if(row===0 && column===0) {
	// 	return "o"
	// }

	
	for(var i=0;i<row;i++) {
		multiDim.push([]);
	}

	//kepala	
	for(var j=0;j<=column;j++){
		if(j===0){
			multiDim[0].push('~');			
		}else {
			multiDim[0].push('_');
		}
		
	}

	//buntut	
	for(var j=0;j<=column;j++){
		if(j===0){
			multiDim[multiDim.length-1].push('o');				
		}else if(j===column){
			multiDim[multiDim.length-1].push('|');
		}
		else {
			multiDim[multiDim.length-1].push('_');
		}
		
	}

	//badan ganjil genap
	for(var j=1;j<row;j++){
		for(var k=0;k<column;k++){
			if(j%2===1 && j!==row-1){
				if(k===column-1) {
					multiDim[j].push('|');	
				}else{
					multiDim[j].push('_');
				}
			}else if(j%2!==1) {
				if(k===0){
					multiDim[j].push('|');
				}else{
					multiDim[j].push('_');
				}
			}
		}
	}

	for(var j=0;j<multiDim.length;j++){
		console.log(multiDim[j].join(' '));
	}

	// for(var m=1;m<=row;m++){
	// 	for(var n=0;n<column;n++){
	// 		multiDim[m].push();
	// 		// if(j%2 !==2){
	// 		// 	// if(k===0) {
	// 		// 		multiDim[j].push('|');	
	// 		// 	// }else{
	// 		// 	// 	multiDim[j].push('_');
	// 		// 	// }
	// 		// }
	// 		// if(j%2===0) {
	// 		// 	if(k===column-1){
	// 		// 		multiDim[j].push('|');
	// 		// 	}else{
	// 		// 		multiDim[j].push('_');
	// 		// 	}
	// 		// }
	// 	}
	// }

	// for(var j=0;j<multiDim.length;j++){
	// 	for(var k=0;k<multiDim[j].length;k++){
	// 		if(j===0 && k===0) {
	// 			multiDim[j].push('~')
	// 		}else{
	// 			multiDim[j].push('_');	
	// 		}
	// 	}
	// }
	//console.log(multiDim);
}	

//console.log(generateSnake(1, 1));
(generateSnake(3, 10));
