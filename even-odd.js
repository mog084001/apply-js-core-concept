function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumberIsEven = isEven(44);
console.log(myNumberIsEven);
const herNumberisEven = isEven(123);
console.log(herNumberisEven);
