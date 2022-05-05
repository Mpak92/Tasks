const balancedStringSplit = function (s) {
  const inputArr = s.split('');
  let countBalancedStrings = 0;
  let countR = 0;
  let countL = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 'R') {
      countR += 1;
    }
    if (inputArr[i] === 'L') {
      countL += 1;
    }
    if (countR === countL) {
      countBalancedStrings += 1;
      countL = 0;
      countR = 0;
    }
  }
  return countBalancedStrings;
};

const s = 'RLRRRLLRLL';

console.log(balancedStringSplit(s));
