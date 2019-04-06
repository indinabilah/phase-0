function targetTerdekat(arr) {
    // you can only write your code here!
    var jml = 0
    var arrX = []
    var arrO = []
    for(i=0; i<arr.length; i++){
        if(arr[i] !== ' '){
            jml += 1
        }
        if(arr[i] === 'x'){
            arrX.push(i)
        }
        if(arr[i] === 'o'){
            arrO.push(i)
        }
    }

    return arrX + arrO
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2