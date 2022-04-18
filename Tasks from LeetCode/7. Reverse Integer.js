const reverse = (x) => {
  const str = x.toString();
  const arr = str.split('');
  if (arr[0] === '-') {
    arr.shift();
    arr.push('-');
  }
  arr.reverse();
  const number = +arr.join('');
  if (number >= -(2 ** 31) && number <= (2 ** 31 - 1)) {
    return number;
  }
  return 0;
};

const x = -214748364;
console.log(reverse(x));
