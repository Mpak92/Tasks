const sumOddLengthSubarrays = function (arr) {
  const subArrs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length && j > i; j += 2) {
      subArrs.push(arr.slice(i, j));
    }
  }
  let result = 0;
  for (let i = 0; i < subArrs.length; i++) {
    const sum = subArrs[i].reduce((a, b) => a + b, 0);
    result += sum;
  }
  return result;
};

const arr = [1, 4, 2, 5, 3];

console.log(sumOddLengthSubarrays(arr));
