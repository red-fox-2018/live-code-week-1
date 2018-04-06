/*jshint esversion:6*/
/*
jika arr search tdak ada return tutup 1 kartu

LOOP untuk index i dimana kurang dari arr1 increment satu
LOOP untuk index 2 dimnaa kurang dari arr2 increment satu
  search arr2 di arr1
  masukan ke arrSearch

LOOP untuk index 3 dimana kurang dari arrSearch
  mencari jumlah nilai array yg terbesar


tampilkan nilai array terbesar jumlahnya
 */


function dominoCard(arr1, arr2) {
  let arrSearch = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i][j]) {
        arrSearch.push(arr1[i]);
      }
    }
  }
  // console.log(arrSearch);
  for (let i = 0; i < arrSearch.length; i++) {
    for (let j = i; j < arrSearch.length; j++) {
      let first = arrSearch[i];
      if (arrSearch[i] < arrSearch[j]) {
        arrSearch[i] = arrSearch[j];
        arrSearch[j] = first;
      }
    }
  }
  // console.log(arrSearch);
  return arrSearch[0];
}


console.log(dominoCard([
  [3, 3],
  [6, 5],
  [3, 4],
  [2, 1]
], [3, 5])); //”keluarkan kartu [6,5]”
console.log(dominoCard([
  [3, 3],
  [6, 5],
  [3, 4],
  [2, 1]
], [1, 3])); //"keluarkan kartu [3,4]"
console.log(dominoCard([
  [2, 4],
  [6, 6],
  [3, 6]
], [1, 5])); //”tutup 1 kartu”
