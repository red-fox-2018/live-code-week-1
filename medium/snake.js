function generateSnake(row, column) {
  //your code here
  var boardLuas = row*column
  var arrBoard = []
	for(var i=0;i<row;i++){
		arrBoard[i]=[]
		for(var j=0;j<column;j++){
			arrBoard[i][j]= '_'
		}
	}
	
	if (row%2===0) {
		arrBoard[0][0]= '~'
		for(var i=1;i<arrBoard.length-1;i++){
		for(var j=1;j<arrBoard.length;j++){
			if (row%2===0) {
				arrBoard[i][column-1]='|'
				arrBoard[i][0]= '|'
			}
		}
	}
	for(var i=1;i<arrBoard.length-1;i++){
		for(var j=0;j<arrBoard.length;j++){
			if (row%2===0 && i%2===0) {
				arrBoard[i][column-1]='_'
			}
			if (row%2===0 && i%2===1) {
				arrBoard[i][0]='_'
			}
		}
	}
	if (row%2===0) {
		arrBoard[row-1][0]='o'
		arrBoard[row-1][column-1]= '|' 
	}
	else if (row%2===1) {
		arrBoard[row-1][column-1]='o'
		}
	}
	





	if (row%2===1) {
		arrBoard[0][column-1]= '~'
		for(var i=1;i<arrBoard.length-1;i++){
		for(var j=1;j<arrBoard.length;j++){
			if (row%2===1) {
				arrBoard[i][column-1]='|'
				arrBoard[i][0]= '|'
			}
		}
	}
	for(var i=1;i<arrBoard.length-1;i++){
		for(var j=0;j<arrBoard.length;j++){
			if (row%2===1 && i%2===1) {
				arrBoard[i][column-1]='_'
			}
			if (row%2===1 && i%2===0) {
				arrBoard[i][0]='_'
			}
		}
	}
	if (row%2===1) {
		arrBoard[row-1][0]='o'
		arrBoard[row-1][column-1]= '|' 
	}
	else if (row%2===0) {
		arrBoard[row-1][column-1]='o'
		}
	}
			
	return arrBoard
}
console.log(generateSnake(5,5));
