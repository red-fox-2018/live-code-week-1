
function findIndexSama(arr1, arr2) {
  var indexSemuaYangMirip = [];
  var indexTerbesar = 0;
  var numberPerbandingan = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i][0] == arr2[0] || arr1[i][1] == arr2[0] || arr1[i][1] == arr2[1] || arr1[i][0] == arr2[1]) {
      indexSemuaYangMirip.push(i)
    }
  }
  return indexSemuaYangMirip
}

function dominoCard(arr1, arr2) {
  var index = findIndexSama(arr1, arr2);
  var numberPerbandingan = 0;

  for (var j = 0; j < index.length; j++) {
    var indexSekarang = arr1[index[j]]
    if ((indexSekarang[0] + indexSekarang[1]) > numberPerbandingan) {
      numberPerbandingan = (indexSekarang[0] + indexSekarang[1]);
      indexTerbesar = index[j]
    }
  }

  if(index.length == 0) {
    console.log('tutup 1 kartu')
  } else {
    console.log(`keluarkan kartu [${arr1[indexTerbesar]}]`);
  }
}

dominoCard([[3,3],[6,5],[3,4],[2,1]], [3,5]) //”keluarkan kartu [6,5]”
dominoCard([[3,3],[6,5],[3,4],[2,1]], [1,3]) //"keluarkan kartu [3,4]"
dominoCard([[2,4],[6,6],[3,6]],[1,5]) // ”tutup 1 kartu”
dominoCard([[2,4],[6,6],[1,6]],[1,5]) // keluarkan kartu [1,6]
dominoCard([[2,4],[2,6],[1,6]],[1,6]) // keluarkan kartu [2,6]
dominoCard([[5,5],[5,8],[3,6]],[5,3]) // keluarkan kartu [5,8]
