const smallestEvenMultiple = (n) => {
  if (!(n % 2)) return n;
  return n * 2;
};

const n = 5;

console.log(smallestEvenMultiple(n));
