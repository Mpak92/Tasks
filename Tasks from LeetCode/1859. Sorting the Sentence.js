const sortSentence = function (s) {
  const inputArr = s.split(' ');
  const resultArr = [];
  for (const elem of inputArr) {
    for (let i = 1; i <= 9; i++) {
      if (elem.includes(i)) {
        resultArr[i - 1] = elem.slice(0, elem.length - 1);
        break;
      }
    }
  }
  const result = resultArr.join(' ');
  return result;
};

const s = 'is2 sentence4 This1 a3';

console.log(sortSentence(s));
