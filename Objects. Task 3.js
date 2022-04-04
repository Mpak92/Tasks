
const solaries = {
    John: 50,
    Ann: 100,
    Pete: 100,
};

let getSum = (obj) => {
    let summ = 0;
    for (let prop in obj) {
        summ += obj[prop];
    };
    return summ;
};

console.log (`Сумма = ${getSum(solaries)}`);
