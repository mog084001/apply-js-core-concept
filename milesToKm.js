function milesToKilometer(miles) {
    const km = miles * 1.609;
    return km;
}

const convertKm = 10;
const convertMiles = milesToKilometer(convertKm);
console.log(convertMiles);