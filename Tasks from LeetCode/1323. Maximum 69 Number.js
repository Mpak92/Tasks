const maximum69Number = function (num) {
  const arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '6') {
      arr[i] = '9';
      break;
    }
  }
  return +arr.join('');
};

const num = 9669;

console.log(maximum69Number(num));