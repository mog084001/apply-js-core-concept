// 1 * 2 * 3 * 4 * 5 * 6 * 7
function multiOfNumbers(number) {
    let mul = 1;
    for (let i = 1; i <= number; i++) {
        mul = mul * i;

    }
    return mul;
}

const totalMul = multiOfNumbers(10);
console.log(totalMul);