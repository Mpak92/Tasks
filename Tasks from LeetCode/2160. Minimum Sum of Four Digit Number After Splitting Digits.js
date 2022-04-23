const minimumSum = function (num) {
  const minSum = 0;
  const arr = num.toString().split('');
  arr.sort((a, b) => a - b);
  const arrResult = [+(arr[0] + arr[2]), +(arr[1] + arr[3])];
  return arrResult[0] + arrResult[1];
};

const num = 2932;
console.log(minimumSum(num));
