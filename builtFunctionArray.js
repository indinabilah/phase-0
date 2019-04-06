
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    console.log(input)

    console.log(input[3].split('/'))
    var tgl = input[3].split('/')
    // console.log(tgl[1])
    switch(tgl[1]){
        case '01':
        console.log(" Januari ")
        break;
        case '02':
        console.log(" Februari ")
        break
        case '03':
        console.log(" Maret ")
        break
        case '04':
        console.log(" April ")
        break
        case '05':
        console.log(" Mei ")
        break
        case '06':
        console.log(" Juni ")
        break
        case '07':
        console.log(" Juli ")
        break
        case '08':
        console.log(" Agustus ")
        break
        case '09':
        console.log(" September ")
        break
        case '10':
        console.log(" Oktober ")
        break
        case '11':
        console.log(" November ")
        break
        case '12':
        console.log(" Desember ")
        break
    }

    console.log(tgl.sort(function(a, b){return b-a}))
    console.log(tgl.join('-'))
    var b = input.slice(1, 2)
    console.log(input[1].slice(0, 15))
}

dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * splice:["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * 05:Mei
 * push:["1989", "21", "05"]
 * join'-':21-05-1989
 * Roman Alamsyah
 */