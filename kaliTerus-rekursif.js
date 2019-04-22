function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka === 0){
        return 1
    }else{
        a = (angka%10) * kaliTerusRekursif(Math.floor(angka/10))
        b = (a%10) * kaliTerusRekursif(Math.floor(a/10))
        return (b%10) * kaliTerusRekursif(Math.floor(b/10))
    }
    var a = (angka%10) * kaliTerusRekursif(Math.floor(angka/10))
    return a
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6