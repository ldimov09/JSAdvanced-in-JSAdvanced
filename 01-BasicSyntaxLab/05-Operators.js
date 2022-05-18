function Operators(fnum, snum, op){
    switch(op){
        case '+':
            console.log(fnum + snum);
            break;
        case '-' :
            console.log(fnum - snum);
            break;
        case '*':
            console.log(fnum * snum);
            break;
        case '%':
            console.log(fnum % snum);
            break;
        case '/': 
            console.log(fnum / snum);
            break;
        case '**':
            console.log(fnum ** snum);
            break;
    }

}