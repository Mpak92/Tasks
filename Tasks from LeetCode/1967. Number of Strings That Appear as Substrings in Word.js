const numOfStrings = function (patterns, word) {
  let count = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) {
      count += 1;
    }
  }
  return count;
};

const patterns = ['a', 'abc', 'bc', 'd'];
const word = 'abc';

console.log(numOfStrings(patterns, word));
