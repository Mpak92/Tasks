const restoreString = function (s, indices) {
  const arr = [];
  const splitArr = s.split();
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  const result = arr.join('');
  return result;
};

const s = 'codeleet';
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
