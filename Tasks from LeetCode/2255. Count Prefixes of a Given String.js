const countPrefixes = (words, s) => {
  let result = 0;
  for (const word of words) {
    if (!s.indexOf(word)) {
      result += 1;
    }
  }
  return result;
};

const words = ['a', 'b', 'c', 'ab', 'bc', 'abc'];
const s = 'abc';

console.log(countPrefixes(words, s));
