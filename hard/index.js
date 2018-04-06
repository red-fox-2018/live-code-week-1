function lompatanKuda(posisi){
  var point = 0;
  var koordinat = [1,1];

  for(var  i = 0 ; i < posisi.length ; i++){

  }



    for(var a = 0 ; a < 1 ; a++){
      koordinat[0] += 2;
      koordinat[1] += 1;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] -= 2;
      koordinat[1] -= 1;
    }

    for(var b = 0 ; b < 1 ; b++){
      koordinat[0] += 2;
      koordinat[1] -= 1;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] -= 2;
      koordinat[1] += 1;
    }

    for(var c = 0 ; c < 1 ; c++){
      koordinat[0] -= 2;
      koordinat[1] += 1;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] += 2;
      koordinat[1] -= 1;
    }

    for(var d = 0 ; d < 1 ; d++){
      koordinat[0] -= 2;
      koordinat[1] -= 1;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] += 2;
      koordinat[1] += 1;
    }

    for(var e = 0 ; e < 1 ; e++){
      koordinat[0] += 1;
      koordinat[1] += 2;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] -= 1;
      koordinat[1] -= 2;
    }

    for(var f = 0 ; f < 1 ; f++){
      koordinat[0] += 1;
      koordinat[1] -= 2;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] -= 1;
      koordinat[1] += 2;
    }

    for(var g = 0 ; g < 1 ; g++){
      koordinat[0] -= 1;
      koordinat[1] += 2;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] += 1;
      koordinat[1] -= 2;
    }

    for(var h = 0 ; h < 1 ; h++){
      koordinat[0] -= 1;
      koordinat[1] -= 2;
      if(koordinat[0] > 0 && koordinat[0] < 9 && koordinat[1] > 0 && koordinat[1] < 9){
        point+=1;
      }
      koordinat[0] += 1;
      koordinat[1] += 2;
    }


  return point;
}

console.log(lompatanKuda('A1')); //2
console.log(lompatanKuda('G7')); //4
console.log(lompatanKuda('C4')); //8
