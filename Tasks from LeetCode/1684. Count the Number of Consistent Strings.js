const countConsistentStrings = function (allowed, words) {
  let result = 0;
  const allowedArr = allowed.split('');
  mark: for (let i = 0; i < words.length; i++) {
    const arr = words[i].split('');
    for (let j = 0; j < arr.length; j++) {
      if (!allowedArr.includes(arr[j])) {
        continue mark;
      }
    }
    result += 1;
  }
  return result;
};

const allowed = 'abc';
const words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];

console.log(countConsistentStrings(allowed, words));
