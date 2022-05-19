function same(a){
    let isSame = true;
    a = a.toString().split('');
    let first = a.shift();
    let sum = +first;
    for(let digit of a){
        sum += +digit;
        if(digit !== first){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
    
}
same(1234);