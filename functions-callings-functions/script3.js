//eigen oefening

//puzzel afgeprijsd 15 euro met 25% korting
//wat is adviesprijs en hoeveel krijg je korting? => 1 functie en met array

//wat is adviesprijs?
const calculateBasePrice = function(newPrice, Perckorting) {
    const basePrice = newPrice * ((100 + Perckorting)/100);
    return basePrice; 
}

const calculateBasePriceAndKortingInEuro = function(newPrice, Perckorting) {
    const basePrice = calculateBasePrice(newPrice, Perckorting);
    const kortingIneuro = basePrice - newPrice;
    return [basePrice, kortingIneuro];
}

console.log(calculateBasePriceAndKortingInEuro(15, 25)); //[18.75, 3.75]

//klopt!!!!