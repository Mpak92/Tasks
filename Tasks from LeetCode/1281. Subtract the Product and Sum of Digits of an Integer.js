const subtractProductAndSum = function (n) {
  const arr = n.toString().split('');
  const prod = arr.reduce((prod, current) => prod * current, 1);
  const sum = arr.reduce((sum, current) => sum + +current, 0);
  return prod - sum;
};

const n = 234;

console.log(subtractProductAndSum(n));
