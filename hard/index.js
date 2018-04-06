function lompatanKuda(position){
    var abjad = ' ABCDEFGH'
    // console.log(abjad[abjad.length-1])
    for(let i=1;i<abjad.length;i++){
        
            if (position == abjad[1] + 1 || position == abjad[abjad.length - 1] + 1 || position == abjad[1] + 8 || position == abjad[abjad.length - 1] + 8  ){
                return 2
            }
            else if (position == abjad[1] + 2 || position == abjad[1] + 7 | position == abjad[abjad.length-1] + 2| position == abjad[abjad.length - 1] + 7) {
                return 3
            }
            else if(position == abjad[1] + i || position == abjad[abjad.length - 1] + i){
              
                return 3
            } 
            else if (position == abjad[2] + 1 || position == abjad[abjad.length - 2] + 1 || position == abjad[2] + 8 || position == abjad[abjad.length - 2] + 8) {
                return 3
            }
            else if (position == abjad[2] + i || position == abjad[abjad.length - 2] + i) {
                return 4
            }
            else if(position==abjad[i]+1 ||position==abjad[i]+8){ 
                return 4
            } 
            else if (position == abjad[i] + 2 || position == abjad[i] + 7) {
                return 4
            } 
           
    }
    for (let i = 1; i < abjad.length; i++) {
        for (let j = 1; j < abjad.length; j++) {
             if (position == abjad[i] + j) {
                return 8
            }
        }
    }
}
console.log(lompatanKuda('A1'))
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('C4')) // 8