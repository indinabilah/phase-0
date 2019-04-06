function balikKata(str){
    var hasil = ''
    for(i=str.length-1; i>=0; i--){
        hasil += str[i]
    }

    return hasil
}

console.log(balikKata('hello world!'))