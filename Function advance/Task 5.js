function sum(a) {
  return function first(b) {
    return a + b;
  };
}

console.log(sum(1)(2));
