const selfDividingNumbers = function (left, right) {
  const result = [];
  label: for (let i = left; i <= right; i++) {
    const str = i.toString();
    if (str.includes('0')) {
      continue;
    }
    for (const char of str) {
      if (i % char) {
        continue label;
      }
    }
    result.push(i);
  }
  return result;
};

const left = 1;
const right = 22;

console.log(selfDividingNumbers(left, right));
