function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (a) {
    this.value += a;
  };
}

const accum = new Accumulator(50);

accum.read(5);
accum.read(10);

console.log((accum.value));
