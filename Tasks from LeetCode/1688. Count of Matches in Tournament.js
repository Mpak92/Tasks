const numberOfMatches = function (n) {
  let result = 0;
  while (n > 1) {
    if (!(n % 2)) {
      n /= 2;
      result += n;
    } else {
      n = (n + 1) / 2;
      result += n - 1;
    }
  }
  return result;
};

const n = 7;

console.log(numberOfMatches(n));
