var a = 2;
var b = 4;
var c = 5;
var d = 10;

function jumlah (){
    var tampung = a*c;
    tampung = tampung + d;
    tampung = tampung * b;
    tampung = tampung + (b*c);
    tampung = tampung / b;
    return tampung;
    
}

console.log(jumlah())
