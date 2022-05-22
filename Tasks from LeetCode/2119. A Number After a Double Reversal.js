const isSameAfterReversals = function (num) {
  if (num === 0) {
    return true;
  }
  const arr = num.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '0') {
      return false;
    } return true;
  }
};

const num = 00;

console.log(isSameAfterReversals(num));
