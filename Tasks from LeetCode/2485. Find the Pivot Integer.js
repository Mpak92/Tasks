const pivotInteger = (n) => {
  let result = -1;
  let sumA = 0;
  let stepA = 0;
  let sumB = n;
  let stepB = n;
  while (stepA !== stepB) {
    if (sumA <= sumB) {
      stepA += 1;
      sumA += stepA;
    } else {
      stepB -= 1;
      sumB += stepB;
    }
  }
  if (sumA === sumB) {
    result = stepA;
  }
  return result;
};

const n = 1;

console.log(pivotInteger(n));
