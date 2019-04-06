function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var sortManual = []

    for(i = 0; i < abc.length; i++){
      for(j = 0; j < animals.length; j++){
        if(animals[j][0] === abc[i]){
          sortManual.push(animals[j])
        }
      }
    }
// return sortManual
    if (result.length === 0){
      result.push([sortManual[0]]);
    }
    var counter = 0
    for (var i = 1; i < sortManual.length; i++){
      if (result[counter][0][0] === sortManual[i][0]){
        result[counter].push(sortManual[i])
      }else{
        ++counter
        result.push([sortManual[i]])
      }
    }
    return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  // console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]