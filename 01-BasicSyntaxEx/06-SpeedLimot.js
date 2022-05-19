function Speed(speed, zone){
    let status = '';
    let difference = 0;
    let speedLimit = 0;
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };
    speedLimit = limits[zone];
    if(speed <= speedLimit && speed > 0){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        difference = speed - speedLimit;
        if(difference <= 20){
            status = 'speeding';
        }else if(difference <= 40 && difference > 20){
            status = 'excessive speeding';            
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
Speed(120, 'interstate');