function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial + i;

    }
    return factorial;
}

const factorial = getFactorial(5);
console.log('factorial of 5 is:', factorial);