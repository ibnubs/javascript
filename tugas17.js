function ubahKata(kata) {
    kataLower = kata.toLowerCase();
    kataUpper = kata.toUpperCase();
    console.log(kataLower),
        console.log(kataUpper)

}

ubahKata("Saya beLajar bahaSa peMrograman deNgan khUsuk.");
ubahKata("Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.");

var tampung;
var indeks = [];

function cariIndeks(kalimat) {
    tampung = kalimat.substr(0, 6);
    for (var a = 0; a < tampung.length; a++) {
        indeks += tampung.charCodeAt(a) + (' - ');
    }
    return indeks.substr(0, 31)
}

console.log(cariIndeks("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
