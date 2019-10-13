function urutTinggi(Anto, Budi, Doni){
    if (Anto > Budi && Anto > Doni){
            console.log("Anto memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Anto);
            if (Budi > Doni){
                console.log("Budi memiliki nilai tinggi ke dua dengan nilai " + Budi);
                console.log("Doni memiliki nilai tinggi ke tiga dengan nilai " + Doni);
            } else{
                console.log("Doni memiliki nilai tinggi ke kedua dengan nilai " + Doni);
                console.log("Budi memiliki nilai tinggi ke tiga dengan nilai " + Budi);
            }
        } else if (Budi > Anto && Budi > Doni ) {
            console.log("Budi memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Budi);
            if (Anto > Doni){
                console.log("Anto memiliki nilai tinggi ke dua dengan nilai " + Anto);
                console.log("Doni memiliki nilai tinggi ke tiga dengan nilai " + Doni);
            } else{
                console.log("Doni memiliki nilai tinggi ke dua dengan nilai " + Doni);
                console.log("Anto memiliki nilai tinggi ke tiga dengan nilai " + Anto);
            }
        } else{
            console.log("Doni memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Doni);    
            if(Anto > Budi){
                console.log("Anto memiliki nilai tinggi ke dua dengan nilai " + Anto);
                console.log("Budi memiliki nilai tinggi ke tiga dengan nilai " + Budi);
            } else {
                console.log("Budi memiliki nilai tinggi ke dua dengan nilai " + Budi);
                console.log("Anto memiliki nilai tinggi ke tiga dengan nilai " + Anto);                
            }
        }
}

urutTinggi(150, 160, 240);

// console.log("Anto memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Anto);
// console.log("Budi memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Budi);
// console.log("Doni memiliki tinggi yang tertinggi dibandingkan lainnya dengan nilai " + Doni);