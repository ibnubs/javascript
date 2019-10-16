function panggilForEach(input){
    console.log(input)
    console.log("---------------------")
    var pisah = input.split(" ")
    console.log(pisah)
    console.log("---------------------")
    pisah.forEach(function(kata,index){
        hasil = ("Item : " + kata + " Index ke " + index);
        console.log(hasil)
        
    })
    return " "
}
console.log(panggilForEach("Saya ingin belajar bersama"));


// output
// Item : Saya Index ke 0
// Item : Ingin Index ke 1
// Item : belajar Index ke 2
// Item : bersama Index ke 3