var hasil;
function deretBilangan(angka){
    hasil = angka.filter(function(angkas){
        return angkas > 15;
    })
    return hasil;     
}
console.log(deretBilangan([32,3,16,40,9,7,11,2,44,1,66]));