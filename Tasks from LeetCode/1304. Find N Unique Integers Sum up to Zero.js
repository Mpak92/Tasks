const sumZero = function (n) {
  const arr = [];
  if (n % 2) {
    arr.push(0);
    for (let i = 1; arr.length < n; i++) {
      arr.push(i);
      arr.push(-i);
    }
  } else {
    for (let i = 1; arr.length < n; i++) {
      arr.push(i);
      arr.push(-i);
    }
  }
  return arr;
};

const n = 5;

console.log(sumZero(n));
