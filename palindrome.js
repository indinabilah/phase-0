function palindrome(kata) {
    // you can only write your code here!
    var banding = ''
    for(i=kata.length-1; i>=0; i--){
        banding += kata[i]
    }
    if(banding === kata){
        return true
    }else{
        return false
    }

    return banding
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false