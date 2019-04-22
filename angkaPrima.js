function angkaPrima(angka) {
    // you can only write your code here!
    var arr = []
    for(i = 2; i <= angka; i++){
        arr.push(i)
    }
    for(i = 2; i < arr.length; i++){
        if(angka % 3 === 0){
            return false
        }
    }
    return true
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false