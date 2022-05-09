const checkIfPangram = function (sentence) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const arr = abc.split('');
  for (let i = 0; i < arr.length; i++) {
    if (!sentence.includes(arr[i])) {
      break;
    }
    if (i === 25) return true;
  }
  return false;
};

const sentence = 'thequickbrownfoxjumpsoverthelazydog';

console.log(checkIfPangram(sentence));
