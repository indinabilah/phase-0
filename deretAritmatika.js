function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisih 
    var sqSelisih = []
    for(i=0; i<arr.length; i++){
        if(arr[i] < arr[i+1]){
            selisih = arr[i+1] - arr[i]
        }
        sqSelisih[sqSelisih.length] = selisih 
    }
    // return sqSelisih
    var banding = sqSelisih[0]
    for(i=0; i<sqSelisih.length; i++){
        var re = ''
        if(banding === sqSelisih[i]){
            re = true
        }else{
            re = false
        }
    }
    return re
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false