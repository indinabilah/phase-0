function angkaPalindrome(num) {
    // you can only write your code here!
    while(true){
        //bikin pembanding dulu
        //misal dia palindrome +1
        num++
        var str = String(num)
        var banding = ''

        for(i=str.length-1; i>=0; i--){
            banding += str[i]
        }
        if(banding === str){
            return Number(banding)
        }
        
    }
    // return banding
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  /**
   * var str = String(num)
    var banding = ''
    for(i=str.length-1; i>=0 ; i--){
        banding += str[i]
    }

    return str
   */