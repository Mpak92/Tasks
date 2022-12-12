const commonFactors = (a, b) => {
  let result = 0;
  const min = Math.min(a, b);
  for (let i = 1; i <= min; i++) {
    if (!(a % i) && !(b % i)) {
      result += 1;
    }
  }
  return result;
};

const a = 12;
const b = 6;

console.log(commonFactors(a, b));
