/*

@ Iswanul Umam - Red Fox
*/

function check(comp, card) {
  if (card[0] == comp[0]) return true;
  if (card[0] == comp[1]) return true;
  if (card[1] == comp[0]) return true;
  if (card[1] == comp[1]) return true;
  return false;
}

function dominoCard(myCard, card) {
  let isExist = false;
  let maxValue = -Infinity;
  let result;
  for (let value of myCard) {
    let sumValue = value[0] + value[1];
    if (check(value, card) && sumValue > maxValue) {
      result = value;
      maxValue = sumValue;
      isExist = true;
    }
  }
  // return result;
  return isExist ? result : 'tutup 1 kartu';
}

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]));
//”keluarkan kartu [6,5]”

console.log(dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]));
//"keluarkan kartu [3,4]"

console.log(dominoCard([[2,4],[6,6],[3,6]], [1,5]));
//”tutup 1 kartu”