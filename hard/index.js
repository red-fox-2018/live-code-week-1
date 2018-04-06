var generateBoard = function(num){
    let board = [];
    let letter = 'abcdefgh';
    let max = num-1;
    for(let i=0;i<num;i++){
        board.push([]);
        for(let j=0;j<num;j++){
            if(j===0 && max > 0){
                board[i].push(max.toString());
                max-=1;
            }
            else if(i === num-1 && j>0){
                board[i].push(letter[j-1]);    
            }
            else{
                board[i].push(' ');
            }
        }
    }
    return board;
}

var lompatanKuda = function(board,coordinate){
    let x=0;
    let y=0;
    let objmove1 = {
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8
    }

    for(let key1 in objmove1){
        if(coordinate[0]===key1){
            y=objmove1[key1];
        }
    }

    let objmove2 = {
        8:0,
        7:1,
        6:2,
        5:3,
        4:4,
        3:5,
        2:6,
        1:7
    }
    
    for(let key2 in objmove2){
        if(coordinate[1]===key2){
            x=objmove2[key2];
        }
    }
    board[x][y]='X';
    let cek = checkMoveAvailable(board,x,y);
    return cek;
}

var checkMoveAvailable = function(board,x,y){
    let count = 0;
    let status = 8;
    while(status > 0){
        if(board[x-1][y] === ' ' && board[x-2][y]=== ' ' && board[x][y-1] === ' '){
            count++;
        }
        else if(board[x-1][y] === ' ' && board[x-2][y]===' '  && board[x][y+1] === ' '){
            count++;
        }
        else if(board[x][y+1] === ' ' && board[x][y+2]===' ' && board[x-1][y] === ' '){
            count++;
        }   
        else if(board[x][y+1] === ' ' && board[x][y+2]===' ' && board[x+1][y] === ' '){
            count++;
        }
        else if(board[x+1][y] === ' ' && board[x+2][y]===' ' && board[x][y+1] === ' '){
            count++;
        }
        else if(board[x+1][y] === ' ' && board[x+2][y]===' ' && board[x][y-1] === ' '){
            count++;
        }
        else if(board[x-1][y] === ' ' && board[x-2][y]===' ' && board[x][y-1] === ' '){
            count++
        }
        else if(board[x-1][y] === ' ' && board[x-2][y]===' ' && board[x][y+1] === ' '){
            count++;
        }
        status--;
    }
    return count;
}

let board1 = generateBoard(9);
let board2 = generateBoard(9);
let board3 = generateBoard(9);
console.log(lompatanKuda(board1,'A1')) // 2
//console.log(lompatanKuda(board2,'G7')) // 4
console.log(lompatanKuda(board3,'C4')) // 8