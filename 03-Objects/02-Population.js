function population(arr){
    let cities = {};
    for(let line of arr){
        let name = line.split(' <-> ')[0];
        let population = +line.split(' <-> ')[1];
        if(cities.hasOwnProperty(name)){
            cities[name] += population;
        }else{
            cities[name] = population;
        }
    }

    for(let entry of Object.entries(cities)){
        console.log(`${entry[0]} : ${entry[1]}`);
    }
}