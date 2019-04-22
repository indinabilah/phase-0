function changeVocals (str) {
    //code di sini
    // a -> b
    // var abc = 'abcdefghijklmnopqrstuvwxyz'
    // var abc2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var vokal = 'aiueoAIUEO'
    var vokal2 = "bjvfpBJVFP"
    var change = ''
    for(i = 0; i < str.length; i++){
        var found = false
        for(j = 0; j < vokal.length; j++){
            if(str[i] === vokal[j]){
                found = true
                change += vokal2[j]
            }
        }
        if(found === false){
            change += str[i]
        }
    }

    // console.log(strNew)
    return change
  }
  
  function reverseWord (str) {
    //code di sini
    var reWord = ''
    for(i = str.length-1; i >= 0; i--){
        reWord += str[i]
    }

    // console.log(reWord, '----------')
    return reWord
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    var abc2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowUpper = ''
    for(i = 0; i < str.length; i++){
        for(j = 0; j < abc.length; j++){
            if(str[i] === abc[j]){
                lowUpper += abc2[j]
            }
            if(str[i] === abc2[j]){
                lowUpper += abc[j]
            }
        }
    }
    return lowUpper
  }
  
  function removeSpaces (str) {
    //code di sini
    var newStr = ''
    for(i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            newStr += str[i]
        }
    }

    return newStr
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    var vokal = changeVocals(name)
    var reverse = reverseWord(vokal)
    var lowerUpper = setLowerUpperCase(reverse)
    var rmSpace = removeSpaces(lowerUpper)
    var result = rmSpace

    return result
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'