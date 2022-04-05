
let calculator = {};

calculator.read = (value1, value2) => {
    calculator.number1 = value1;
    calculator.number2 = value2;
};

calculator.sum = (obj) => {
    let sum = 0;
    for (let prop in obj) {
        if (typeof obj[prop] == 'number') {
        sum += obj[prop];
        };
    };
    return sum;
};

calculator.mul = (obj) => {
    let mul = 1;
    for (let prop in obj) {
        if (typeof obj[prop] == 'number') {
        mul *= obj[prop];
        };
    };
    return mul;
};

calculator.read(14, 5);
console.log ( calculator.sum(calculator) );
console.log ( calculator.mul(calculator) );
