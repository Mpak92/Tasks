const canBeEqual = (target, arr) => {
  const targetStr = target.sort((a, b) => a - b).join('');
  const arrStr = arr.sort((a, b) => a - b).join('');
  return targetStr === arrStr;
};

const target = [1, 2, 3, 4];
const arr = [2, 4, 1, 3];

console.log(canBeEqual(target, arr));
