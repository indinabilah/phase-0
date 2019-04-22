function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktor = []
    if(angka === 1){
        faktor = [1]
    }
    for(i = 1; i <= angka; i++){
        if(angka % i === 0){
            faktor.push(i)
        }
    }

    var depan = []
    var belakang = []

    for(i = 0; i <= (faktor.length/2)-1; i++){
        depan.push(faktor[i])
    }
    for(i = faktor.length-1; i > (faktor.length/2)-1; i--){
        belakang.push(faktor[i])
    }

    var digit = []
    for(i = 0; i < depan.length; i++){
        digit.push(depan[i]+''+belakang[i])
    }

    var sortManual = []
    for(i = 0; i < digit.length; i++){
        sortManual.push(digit[i].length)
    }
    var banding = sortManual[0]
    for(i = 0; i < sortManual.length; i++){
        if(banding > sortManual[i].length){
            banding = sortManual[i].length
            sortManual[i].length = sortManual[i+1].length
            sortManual[i+1].length = banding
        }
    }
    // return digit[0].length
    // var banding = digit[0].length
    // for(i = 0; i < digit.length-1; i++){
    //     if(banding > digit[i].length){
    //         banding = digit[i].length
    //         digit[i].length = digit[i+1].length
    //         digit[i+1].length = banding
    //     }
    // }
    return sortManual[sortManual.length-1]
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2