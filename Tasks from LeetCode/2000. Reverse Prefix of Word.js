const reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }
  let result = '';
  for (let i = index; i >= 0; i--) {
    result += word[i];
  }
  for (let i = index + 1; i < word.length; i++) {
    result += word[i];
  }
  return result;
};

const word = 'abcdefd';
const ch = 'd';

console.log(reversePrefix(word, ch));
