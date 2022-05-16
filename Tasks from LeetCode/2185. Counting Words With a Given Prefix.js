const prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(pref) === 0) {
      count += 1;
    }
  }
  return count;
};

const words = ['pay', 'attention', 'practice', 'attend'];
const pref = 'at';

console.log(prefixCount(words, pref));
