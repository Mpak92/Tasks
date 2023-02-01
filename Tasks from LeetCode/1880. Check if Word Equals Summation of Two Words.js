const isSumEqual = (firstWord, secondWord, targetWord) => {
  const alph = 'abcdefghij';
  const firstWordValue = +firstWord.split('').map((a) => alph.indexOf(a)).join('');
  const secondWordValue = +secondWord.split('').map((a) => alph.indexOf(a)).join('');
  const targetWordValue = +targetWord.split('').map((a) => alph.indexOf(a)).join('');
  return (firstWordValue + secondWordValue) === targetWordValue;
};

const firstWord = 'acb';
const secondWord = 'cba';
const targetWord = 'cdb';

console.log(isSumEqual(firstWord, secondWord, targetWord));
