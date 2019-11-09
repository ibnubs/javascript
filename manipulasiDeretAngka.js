function deretAngka(n) {
    // tulis jawabanmu di sini
    var tampungAngka = "";
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            tampungAngka +=  "NIOMIC "
        } else if (i % 5 === 0) {
            tampungAngka = tampungAngka + "MIC "
        } else if (i%3 === 0){
            tampungAngka += "NIO "
        } else {
            tampungAngka += i + ' '  
        }
    }

return tampungAngka;
}


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))