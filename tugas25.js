function filterSortingReversal(number){
    console.log("Sebelumnya : " + number);
    firstSort = number.sort();
    console.log("Accending : " + firstSort);
    secondReverse = firstSort.reverse();
    console.log("Descending : " + secondReverse);
    thirdFilter = secondReverse.filter(function (angka){
        return angka > 10;
    });
    filterPrint = "Filter > 10 : " + thirdFilter;
    return filterPrint ;
    


}
console.log(filterSortingReversal([2,39,76,50,9,7,41,2,24,1,16]));