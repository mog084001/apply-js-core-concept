function incheToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = incheToFeet(dadaInches);
console.log(dadaFeet);