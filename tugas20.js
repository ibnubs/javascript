function mencariKata(kata){
    var input =  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";

    hasil = input.match(kata);
    return hasil;

}

console.log(mencariKata("are"));
console.log(mencariKata("words"));