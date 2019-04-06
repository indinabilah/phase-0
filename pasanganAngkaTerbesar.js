function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = String(num)
    var strArr=[]
    var numStr = ''
    for(i=0; i<str.length-1; i++){
        numStr = str[i] + str[i+1]
        strArr[strArr.length] = numStr
        numStr = ''
    }
    var banding = strArr[0]
    for(i=0; i<strArr.length; i++){
        if(banding < strArr[i]){
            banding = strArr[i]
            strArr[i] = strArr[i+1]
            strArr[i+1] = banding
        }
    }
    return banding
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99