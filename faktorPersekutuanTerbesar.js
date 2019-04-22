function fpb(angka1, angka2) {
    // you can only write your code here
    var num = []
    var num2 = []

    for(i = 1; i <= angka1; i++){
        if(angka1 % i === 0){
            num.push(i)
        }
    }
    for(i = 0; i <= angka2; i++){
        if(angka2 % i === 0){
            num2.push(i)
        }
    }

    var sama = []
    for(i = 0; i < num.length; i++){
        for(j = 0; j < num2.length; j++){
            if(num[i] === num2[j]){
                sama.push(num[i])
            }
        }
    }

    return sama[sama.length-1]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
