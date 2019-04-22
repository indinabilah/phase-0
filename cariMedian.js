function cariMedian(arr) {
    // you can only write your code here!
    // var sortManual = sorting(arr)
    if(arr.length % 2 !== 0){
        return arr[(Math.floor(arr.length/2))]
    }else{
        return (arr[(Math.floor(arr.length/2))-1] + arr[(Math.floor(arr.length/2))]) / 2
    }
    // return sortManual
}
// function sorting(arrNumber) {
//     var urut =[]
//     var length = arrNumber.length
//     for(i = 0; i < length; i++){
//         for(j = 0; j < length-i; j++){
//             if(arrNumber[j] > arrNumber[j+1]){
//                 urut = arrNumber[j] //kalo kecil switch tempat
//                 arrNumber[j] = arrNumber[j+1] //switch tempat ke depan 
//                 arrNumber[j+1] = urut //nentuin pebanding nantinya
//             }
//         }
//     }
//     return arrNumber
// }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5