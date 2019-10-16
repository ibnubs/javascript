function perulangan(kata){
    hasil = kata.repeat(5);
    return hasil;
}

console.log(perulangan("Semangat..."));

console.log("-------------------------------");


function perulanganBintang(){
    var bintang = "*"
    console.log(bintang.repeat(4));
    console.log(bintang.repeat(25));
    console.log(bintang.repeat(45));
    console.log(bintang.repeat(75));
    console.log(bintang.repeat(45));
    console.log(bintang.repeat(25));
    console.log(bintang.repeat(4));
}
perulanganBintang();