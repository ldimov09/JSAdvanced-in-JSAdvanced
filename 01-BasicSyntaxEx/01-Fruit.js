function Fruit(furitName, weightInGrams, pricePerKilogram){
    let weightInKG = weightInGrams / 1000;
    let finalPrice = weightInKG * pricePerKilogram;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${furitName}.`);

}
Fruit('orange', 2500, 1.80);