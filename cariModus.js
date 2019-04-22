function cariModus(arr) {
    // you can only write your code here!
    var sortManual = sorting(arr)
    // return sortManual
    var sama = []
    for(i = 0; i < sortManual.length; i++){
        if(sortManual[i] === sortManual[i+1]){
            sama.push(sortManual[i])
        }
    }

    if(sama.length === 0 || sama[0]===sama[1]){
        return -1
    }else{
        return sama[0]
    }
    return sama[0]
}
function sorting(arrNumber) {
    // code di sini
    var urut =[]
    var length = arrNumber.length
    for(i = 0; i < length; i++){
        for(j = 0; j < length-i; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                urut = arrNumber[j] //kalo kecil switch tempat
                arrNumber[j] = arrNumber[j+1] //switch tempat ke depan 
                arrNumber[j+1] = urut //nentuin pebanding nantinya
            }
        }
    }
    return arrNumber
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1