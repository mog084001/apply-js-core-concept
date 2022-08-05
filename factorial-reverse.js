function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
        console.log(i);
    }
    return fact;
}


const totalFact = factorial(6);
console.log('factorial of 6:', totalFact);