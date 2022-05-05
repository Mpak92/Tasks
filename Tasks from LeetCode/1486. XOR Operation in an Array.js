const xorOperation = function (n, start) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    const num = start + 2 * i;
    result ^= num;
  }
  return result;
};

const n = 5;
const start = 0;

console.log(xorOperation(n, start));
