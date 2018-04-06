function generateBoard() {
    let board = [];

    for (let i = 0; i < 8; i++) {
        let temp = [];
        for (let j = 0; j < 8; j++) {
            temp.push(' ');
        }

        board.push(temp);
    }

    return board;
}

function lompatanKuda() {
    let board = generateBoard();
    let coor = [1, 1]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i === coor[0] && j === coor[1]) {
                board[i][j] = 'K';
            }
        }
    }

    console.log(board);
}

// console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8

lompatanKuda()