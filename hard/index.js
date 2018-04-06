function chessBoard(koordinat) {
	// body...
	var chessHorizontal = 'ABCDEFGH'
	var chessVertical = '87654321'
	var sumbuX = chessHorizontal.split('')
	var sumbuY = chessVertical.split('')
	// console.log(sumbuX);
	// console.log(sumbuY);
	var koordinatY = 0;
	var koordinatX = 0;
	//mencari koordinat X
		for(var j=0;j<chessHorizontal.length;j++){
			if (koordinat[0]===chessHorizontal[j]) {
				koordinatX=j
			}
	}
	console.log(koordinatX);
	//mencari koordinat Y
		for(var i=0;i<chessVertical.length;i++){
			if (koordinat[1]===chessVertical[i]) {
				koordinatY=i
			}
		}
		console.log(koordinatY);

	var board = []
	var counterMove = 0
	for(var i=0;i<8;i++){
		board[i]=[]
		for(var j=0;j<8;j++){
			board[i][j]='O'
		}
	}
	board[koordinatY][koordinatX] = 'K'
	console.log(board);


	// if (koordinatY<=7 && koordinatY>0 && koordinatX<=7 && koordinatY>=0 && koordinatY+1<=7 && board[koordinatY+1][koordinatX+2]==='O' ) {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY+2][koordinatX+1]==='O' ) {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY+2][koordinatX-1]==='O') {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY+1][koordinatX-2]==='O') {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY-1][koordinatX-2]==='O') {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY-2][koordinatX-1]==='O') {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY-2][koordinatX+1]==='O') {
	// 	counterMove++
	// }
	// if (koordinatY<=7 && koordinatX>=0 && koordinatY+1<=7 && board[koordinatY-1][koordinatX+2]==='O') {
	// 	counterMove++
	// }

	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX+2]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY+2][koordinatX+1]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY+2][koordinatX-1]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX-2]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX+2]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX+2]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX+2]==='O') {
				counterMove++
			}
		}
	}
	if (koordinatX<=7 && koordinatX>=0) {
		if (koordinatY<=7 && koordinatY>=0) {
			if (board[koordinatY-1][koordinatX+2]==='O') {
				counterMove++
			}
		}
	}
	console.log('koordinat X ',koordinatX);
	console.log('koordinat Y ',koordinatY);
	console.log(counterMove);
}
console.log(chessBoard('A1'));