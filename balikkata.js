function balikKata(kata) {
 // tulis jawabanmu di sini
    
    var tampungKata = "" ;
    for (var i=kata.length-1; i >= 0 ; i--){
        tampungKata = tampungKata + kata[i];
    }
    return tampungKata;
}

// testCase
console.log(balikKata("Niomic!"))    
console.log(balikKata("JavaScript"))  
console.log(balikKata("alohahola"))  
console.log(balikKata("Jawa_Barat"))  