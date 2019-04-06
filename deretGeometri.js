function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var selisih
    var arrSl =[]
    for(i=0; i<arr.length-1; i++){
        selisih = Math.floor(arr[i+1] / arr[i])
        arrSl[arrSl.length] = selisih
    }
    var banding = arrSl[0]
    for(i=0; i<arrSl.length; i++){
        var re = ''
        if(banding === arrSl[i]){
            re = true
        }else{
            re = false
        }
    }
    return re
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false