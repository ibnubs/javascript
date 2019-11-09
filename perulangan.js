function panggilPerulanganFor(){
    var dataKota1 = ['Jakarta', 'Balikpapan', 'Medan'];
    for (var i = 0; i < dataKota1.length; i++){
        console.log(dataKota1[i]);
        console.log(i);
        console.log(dataKota1);
    }
}
panggilPerulanganFor();

console.log('----------------------------------------------------------------')

function panggilPerulanganForeach(){
    var dataKota2 = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota2.forEach((item,index,array)=>{
        console.log(item);
        console.log(index);
        console.log(array);
    });
}
panggilPerulanganForeach()


console.log('----------------------------------------------------------------')

function panggilPerulanganMap(){
    var dataKota3 =  ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota3.map((item, index,array) => {
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
panggilPerulanganMap();