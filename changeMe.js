function changeMe(arr) {
    // you can only write your code here!
    result = {
        // firstName: '',
        // lastName: '',
        // gender: '',
    }

    var keys = Object.keys(result)
    // console.log(keys)
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            result.firstName = arr[i][j]
            result.lastName = arr[i][j+1]
            result.gender = arr[i][j+2]
            if(arr[i][j+3] === undefined){
                result.age = 'Invalid Birth Year'
            }else{
                result.age = 2019 - arr[i][j+3]
            }
            break            
        }
        console.log(i+1 + '. ',result.firstName, '', result.lastName,'\n',result)
        // console.log(result)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'], ['Indy', 'Nabilah', 'Female', 1997]]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""