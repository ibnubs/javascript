
    var AB = 8;
    var BC = 6; 
    var AC;

function sisiMiringSegitigaSiku(){


    var x = Math.pow(AB,2);
    var y = Math.pow(BC,2);
    
    AC = Math.sqrt(x+y);
    
    return AC
    


}
sisiMiringSegitigaSiku()

console.log('Nilai AB: '+ AB);
console.log('Nilai BC: '+ BC);
console.log('panjang sisi AC pada segitiga siku-siku tersebut adalah : '+ AC + ' cm');