function menuKopi (){
    var kopiManual = {
        v60: 15000,
        vietnamDrip: 1200,
        mokaPot: 13000
    }
    console.log("menu sebelum di ubah")
    console.log(kopiManual);
    console.log("menu setelah di ubah")
    kopiManual.v60 = 20000;
    console.log(kopiManual);
}
menuKopi()