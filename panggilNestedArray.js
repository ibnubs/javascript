function panggilNestedArray(value) {
    // tulis jawabanmu disini
    var a = value.length;
    var c = 0;
    var b = value[c].length;
    var x, y;
    var tampung = "";
    var hasil2 = [];


    for (x = 0; x < b; x++) {
        var hasil = []
        for (y = 0; y < a; y++) {
            tampung = value[y][x];
            // console.log(tampung)
            hasil.push(tampung)
        }
        // console.log(hasil)
        hasil2.push(hasil)
    }
    console.log(hasil2)



}

var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)


/*
outpust seharusnya
[ [ 1, 'Mark Zuckerberg', 'Facebook' ],
 [ 2, 'Elon Musk', 'Tesla' ],
 [ 3, 'Bill Gates', 'Microsoft' ],
 [ 4, 'Steve Jobs', 'Apple' ] ]
*/