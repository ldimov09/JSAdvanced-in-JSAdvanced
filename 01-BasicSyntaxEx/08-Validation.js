function DekartValidation (x1, y1, x2, y2){
    let x0 = 0; // Кординатното наало има кординати 0, 0g
    let y0 = 0;
    let dist1 = Math.sqrt((x0 - x1)**2 + (y0 - y1)**2);
    let dist2 = Math.sqrt((x0 - x2)**2 + (y0 - y2)**2);
    let dist3 = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

    if (dist1 % 1 == 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (dist2 % 1 == 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (dist3 % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
DekartValidation(2, 1, 1, 1);