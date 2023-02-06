const digitCount = (num) => {
  let result = null;
  const numArr = num.split('');
  for (let i = 0; i < numArr.length; i++) {
    let count = 0;
    for (let n = 0; n < numArr.length; n++) {
      if (i == numArr[n]) {
        count += 1;
      }
    }
    if (count == numArr[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

const num = '1210';

console.log(digitCount(num));
