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

function lompatanKuda(str) {
    str = str.split('');
    let board = generateBoard();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let number = [0, 1, 2, 3, 4, 5, 6, 7];
    let first = alphabet.indexOf(str[0]);
    let last = parseInt(str[1]) - 1;
    let coor = [first, last];
    let counter = 0;

    for (let i = board.length - 1; i >= 0 ; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (i === coor[0] && j === coor[1]) {
                board[i][j] = 'K';
                if (i + 1 !== undefined) {
                    if (i + 2 !== undefined) {
                        if (i + 2) {
                            if (j - 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }

                if (i + 1 !== undefined) {
                    if (i + 2 !== undefined) {
                        if (i + 2) {
                            if (j - 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }

                if (i - 1 !== undefined) {
                    if (i - 2 !== undefined) {
                        if (i - 2) {
                            if (j + 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }

                if (i - 1 !== undefined) {
                    if (i - 2 !== undefined) {
                        if (i - 2) {
                            if (j - 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }

                if (j + 1 !== undefined) {
                    if (j + 2 !== undefined) {
                        if (j + 2) {
                            if (i + 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }

                if (j + 1 !== undefined) {
                    if (j + 2 !== undefined) {
                        if (j + 2) {
                            if (i - 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }


                if (j - 1 !== undefined) {
                    if (j - 2 !== undefined) {
                        if (j - 2) {
                            if (i + 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }


                if (j - 1 !== undefined) {
                    if (j - 2 !== undefined) {
                        if (j - 2) {
                            if (i - 1 !== undefined) {
                                counter++;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(board.reverse())
    return counter;
}

console.log(lompatanKuda('A1')) // 2
// console.log(lompatanKuda('G7')) // 4
// console.log(lompatanKuda('C4')) // 8