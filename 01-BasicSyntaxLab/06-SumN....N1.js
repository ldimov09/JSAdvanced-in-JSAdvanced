function sumNtoN1(a, b) {
    a = +a;
    b = +b;
    let res = 0;
    for(let i = a; i <= b; i++) {
        res += i;
    }
    console.log(res);
}
sumNtoN1('-8', '20');
