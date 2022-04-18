const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const n = 9;
console.log(sumTo(n));

const sumToRec = (m) => {
  let sum = 0;
  if (m > 1) {
    sum = (m + sumToRec(m - 1));
    return sum;
  }
  sum = m;
  return sum;
};

const m = 9;
console.log(sumToRec(m));

const sumToForm = (k) => {
  let sum = k * (k + 1) / 2;
  return sum;
};

const k = 9;
console.log(sumToForm(k));
