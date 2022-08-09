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

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// let a =50;
// if(item => 50){};
// if(false){};

// for(let i = 5; i<10; i=i+2){}

function print(a, b, c) {
    return a + 2;
    return a * b;
    return b * c + a;
}
console.log(print(1, 2, 3));