const halvesAreAlike = function (s) {
  const first = s.slice(0, (s.length / 2));
  const second = s.slice((s.length / 2), s.length);
  const vowel = 'aeiouAEIOU';
  let firstVowelCount = 0;
  let secondVowelCount = 0;
  for (const char of first) {
    if (vowel.includes(char)) {
      firstVowelCount += 1;
    }
  }
  for (const char of second) {
    if (vowel.includes(char)) {
      secondVowelCount += 1;
    }
  }
  if (firstVowelCount === secondVowelCount) {
    return true;
  }
  return false;
};

const s = 'book';

console.log(halvesAreAlike(s));
