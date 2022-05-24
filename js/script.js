"use strict"


//1
const sumTwoSmallestNumbers = (...args) => {
    if (args.length == 1) {
        return console.error("...");
    } else {
        const sortedArray = args.sort((a, b) => a - b);
        return sortedArray[0] + sortedArray[1];
    }
};


console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1));


//2
function createCalculator(defaultValue ) {
    let result = defaultValue ;
    return {
        sum: (a) => {
            result += a
            return result
        },
        mult: (a) => {
            result *= a
            return result
        },
        sub: (a) => {
            result -= a
            return result
        },
        div: (a) => {
            result /= a
            return result
        },
    }
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));