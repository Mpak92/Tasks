const percentageLetter = (s, letter) => {
  let count = 0;
  for (const symb of s) {
    if (symb === letter) {
      count++;
    }
  }
  const percentage = Math.floor((count / s.length) * 100);
  return percentage;
};

const s = 'foobar';
const letter = 'o';

console.log(percentageLetter(s, letter));
