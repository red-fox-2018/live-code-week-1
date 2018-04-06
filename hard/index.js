function reverseString(str) {
  return str.split("").reverse().join("");
}

function createBoard(side) {
  let board = []
  for (let i = 0; i < side; i++) {
    board[i] = [];
    for (let j = 0; j < side; j++) {
      board[i].push([])
    }
  }
  return board
}
function lompatanKuda(pos) {
  let abjad = {}
  for (let i = 0; i < 8; i++) {
    let alphabet = 'ABCDEFGH';
    abjad[alphabet[i]] = i
  }
  let nums = {}
  let count = 8
  for (let i = 0; i < 8; i++) {
    nums[count] = i
    count--
  }

  // console.log(abjad)
  // console.log(nums)
  let board = createBoard(8);
  pos = pos.split('');
  let x = 0
  for (let i in abjad) {
    if(pos[0] === i) {
      x = abjad[i]
    }
  }
  let y = 0;
  for (let i in nums) {
    if(pos[1] === i) {
      y = nums[i]
    }
  }
  // let y = nums[pos[1]]
  
  // console.log(x,y)
  board[y][x] = 'K';
  count = 0;
  if( x >= 2 && y >= 4)  {
    if (board[x+1][y-2] !== undefined) count++;
    if (board[x+2][y-3] !== undefined) count++;
    if (board[x+1][y+2] !== undefined) count++;
    if (board[x+2][y+3] !== undefined) count++; 
    if (board[x-1][y-2] !== undefined) count++;
    if (board[x-2][y-3] !== undefined) count++;
    if (board[x-1][y+2] !== undefined) count++;
    if (board[x-2][y+3] !== undefined) count++;
  }
  else if( x >= 0 && y >= 4)  {
    if (board[x+1][y-2] !== undefined) count++;
    if (board[x+2][y-3] !== undefined) count++;
    if (board[x+1][y+2] !== undefined) count++;
    if (board[x+2][y+3] !== undefined) count++;
  }
  return count
}

console.log(lompatanKuda('A1')) // 2
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8