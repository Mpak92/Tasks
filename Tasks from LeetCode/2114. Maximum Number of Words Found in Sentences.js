const mostWordsFound = function (sentences) {
  let maxWords = 0;
  for (const key of sentences) {
    const arr = key.split(' ');
    if (arr.length >= maxWords) maxWords = arr.length;
  }
  return maxWords;
};

const sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'];
console.log(mostWordsFound(sentences));
