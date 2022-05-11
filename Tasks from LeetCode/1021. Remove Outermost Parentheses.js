const removeOuterParentheses = function (s) {
  const arr = s.split('');
  let count = 0;
  let last = 0;
  const splitArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      splitArr.push(arr.slice(last + 1, i).join(''));
      last = i + 1;
    }
  }
  return splitArr.join('');
};

const s = '(()())(())';

console.log(removeOuterParentheses(s));
