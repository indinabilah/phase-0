function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var strArr =[]
    var str = ''
    for(i=0; i< kalimat.length; i++){
        var found = false
        if(kalimat[i] !== ' '){
            found = true
            str += kalimat[i]
        }
        if(found === false || i === kalimat.length-1){
            strArr[strArr.length] = str
            str = ''
        }
    }
    return strArr.length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5