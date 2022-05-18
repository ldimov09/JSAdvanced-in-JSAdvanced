function Circle(r){
    if(typeof r == 'number'){
        console.log((Math.pow(r, 2) * Math.PI).toFixed(2));

    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`);
    }

}
Circle(5)
Circle('name')