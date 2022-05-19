function cook(myNumber ,com1, com2, com3, com4, com5) {
    myNumber = +myNumber;
    let arr = [com1, com2, com3, com4, com5];
    for(let command of arr) {
        switch(command) {
            case "chop":
                myNumber = myNumber / 2;
                break;
            case 'dice':
                myNumber = Math.sqrt(myNumber);
                break;
            case 'spice':
                myNumber++;
                break;
            case 'bake':
                myNumber *= 3;
                break;
            case 'fillet':
                myNumber = myNumber * 0.80;
                break;
        }
        console.log(myNumber);
    }
}
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');