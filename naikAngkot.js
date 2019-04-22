function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var tarif = 2000
    var result = []

    for(i = 0; i < arrPenumpang.length; i++){
        // console.log(arrPenumpang[i])
        // console.log(Obj)
        var awal = arrPenumpang[i][1]
        var akhir = arrPenumpang[i][2]
        var jarak = 0
        for(j = 0; j < rute.length; j++){
            // console.log(rute[j])
            if(awal === rute[j]){
                var awal = j
            }
            if(akhir === rute[j]){
                var akhir = j
            }
            jarak = Math.abs(akhir - awal)
            // console.log(jarak)
            bayar = tarif * jarak

        }
        result.push(Obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: bayar
        })
        
    }

    return result
    // return bayarr
    //your code here
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
//   console.log(naikAngkot([])); //[]