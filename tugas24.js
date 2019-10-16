var before;
var accend;
var descend;

function sortAndReversal (number){
    before = ("Sebelumnya : " + number );
    console.log(before);
    accend = number.sort();
    accendPrint = ("Ascending : " + accend)
    console.log(accendPrint)
    descPrint = accend.reverse()
    descPrint = ("Descending : " + descPrint);
    return descPrint
}

console.log(sortAndReversal([32,33,16,40,9,7,11,2,44,1,66]));