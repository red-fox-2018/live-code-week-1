function generateSnake(row, column) {
  let total = row*column
  
  if(total==0){
    return "row atau column minimal harus 1"
  }else{
    let akhir = total-(row*column)+1
    let result = []
      for(let i=0;i<row;i++){
          let tampung = []
          let end = total-(column*i)
          let start = end-column+1
          if(i%2==0){
              for(let l=end;l>=start;l--){
                  if(l==akhir){
                    tampung.push("o")
                  }
                  else if(l==total){
                    tampung.push("~")
                  }
                  else if(l==end){
                    tampung.push("|")
                  }
                  else{
                    tampung.push("_")
                  }
              }
          }else{
              for(let m=start;m<=end;m++){
                  if(m==akhir){
                    tampung.push("o")
                  }
                  else if(m==end){
                    tampung.push("|")
                  }else{
                    tampung.push("_")
                  }
              }
          }
          result.push(tampung.join(""))  
      }
      return result.join("\n")
  }
}

console.log(generateSnake(6, 10));
