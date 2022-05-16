const generateTheString = function (n) {
  let result = '';
  if (n % 2) {
    for (let i = 0; i < n; i++) {
      result += 'a';
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      result += 'a';
    }
    result += 'b';
  }
  return result;
};

const n = 4;

console.log(generateTheString(n));
