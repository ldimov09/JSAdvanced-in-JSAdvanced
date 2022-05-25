function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
            this.treasury = Math.floor(this.treasury);

        },
        applyGrowth: function (percentage) {
            this.population += this.population * (percentage / 100);
            this.population = Math.floor(this.population);
        },
        applyRecession: function (percentage) {
            this.treasury -= this.treasury * (percentage / 100);
            this.treasury = Math.floor(this.treasury);
        }
    }
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);
