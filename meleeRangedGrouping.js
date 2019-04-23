/**
 * 
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
 */
function meleeRangedGrouping (str) {
    if(str.length === 0){
        return []
    }
    var splitStr = str.split(',')
    var newStr = []
    for(var i = 0; i < splitStr.length; i++){
       var inside = splitStr[i].split('-')
       newStr.push(inside[0])
       newStr.push(inside[1])
    }
    // console.log(newStr)    
    var insRe = {
        Ranged: [],
        Melee: []
    }
    var keys = Object.keys(insRe)
    // console.log(keys)
    for(var i = 0; i < keys.length; i++){
        for(var j = 0; j < newStr.length; j++){
            if(keys[i] === newStr[j+1]){
                insRe[keys[i]].push(newStr[j])
            }
        }
    }

    var result = Object.values(insRe)
    // console.log(insRe)
    // console.log(result)
    // console.log(splitStr)
    return result
    return ''
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []