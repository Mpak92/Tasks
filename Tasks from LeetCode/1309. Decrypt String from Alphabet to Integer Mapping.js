const freqAlphabets = function (s) {
  const arr = s.split('');
  const alfArr = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2] === '#') {
      alfArr.push(alphabet[+(arr[i] + arr[i + 1]) - 1]);
      i += 2;
    } else {
      alfArr.push(alphabet[+arr[i] - 1]);
    }
  }
  return alfArr.join('');
};

const s = '10#11#12';

console.log(freqAlphabets(s));
