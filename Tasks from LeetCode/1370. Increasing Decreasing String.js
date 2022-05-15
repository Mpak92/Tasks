const sortString = function (s) {
  const arr = s.split('').sort();
  let result = '';
  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        result += arr[i];
        arr.splice(i, 1);
        i--;
      }
    }
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] !== arr[j - 1]) {
        result += arr[j];
        arr.splice(j, 1);
      }
    }
  }
  return result;
};

const s = 'aaaabbbbcccc';

console.log(sortString(s));
