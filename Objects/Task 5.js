function Calculator() {
  this.read = function (num1, num2) {
    this.a = num1;
    this.b = num2;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calc = new Calculator();

calc.read(20, -4);

console.log(calc.sum());
console.log(calc.mul());
