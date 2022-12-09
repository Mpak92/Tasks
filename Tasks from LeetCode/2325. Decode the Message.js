const decodeMessage = (key, message) => {
  let result = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cryptAlph = new Set(key.split(' ').join('').split(''));
  const cryptArr = [];
  for (const val of cryptAlph) {
    cryptArr.push(val);
  }
  const cryptString = cryptArr.join('');
  for (const char of message) {
    const num = cryptString.indexOf(char);
    if (num === -1) {
      result += ' ';
    } else result += alphabet[num];
  }
  return result;
};

const key = 'the quick brown fox jumps over the lazy dog';
const message = 'vkbs bs t suepuv';

console.log(decodeMessage(key, message));
