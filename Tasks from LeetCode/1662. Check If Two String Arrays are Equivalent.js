const arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.reduce((a, b) => a + b, '');
  const str2 = word2.reduce((a, b) => a + b, '');
  if (str1 === str2) {
    return true;
  } return false;
};

const word1 = ['ab', 'c'];
const word2 = ['a', 'bc'];

console.log(arrayStringsAreEqual(word1, word2));
