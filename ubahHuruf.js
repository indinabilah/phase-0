function ubahHuruf(kata) {
    // you can only write your code here!
    var abc = 'abcdefghijklmnopqrstuvwxyz'
    // return kata.length
    var huruf = ''
    for(i = 0; i < kata.length; i++){
        for(j = 0; j < abc.length; j++){
            if(kata[i] === abc[j]){
                if(kata[i] === 'z'){
                    huruf += abc[0]
                }else{
                    huruf += abc[j+1]
                }
            }
        }
    }
    return huruf
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangatz')); // tfnbohbu