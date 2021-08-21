const numbers=[10,25,32,47,59,68,75,37];

const oddNumbers=numbers.filter(number=>number%2!==0).map(number=>number*2);
console.log(" doubled numbers are ==> "+ oddNumbers);
console.log(oddNumbers);
