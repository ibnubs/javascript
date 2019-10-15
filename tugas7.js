var tinggiBadan = [148, 155, 158, 160, 165, 170, 190, 210, 110, 178];

// menggunakan perulangan biasa
console.log("dibawah ini menggunakan perulangan FOR biasa");

for (var i = 0; i<tinggiBadan.length; i++){
    console.log(tinggiBadan[i])
}


// menggunakan perulangan for of
console.log("dibawah ini menggunakan perulangan FOR OF");
for (let x of tinggiBadan){
    console.log(x);
}