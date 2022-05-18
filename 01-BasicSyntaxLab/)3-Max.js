function Max(num1, num2, num3){
    let max;
    if(num1 < num2){
        let w = num1;
        num1 = num2;
        num2 = w;
    }
    if(num1 < num3){
        let w = num1;
        num1 = num3;
        num3 = w;
    }
    if(num2 < num3){
        let w = num2;
        num2 = num3;
        num3 = w;
    }
    max = num1;

    console.log( `The largest number is ${max}.`);
}
Max(5, -3, 16);